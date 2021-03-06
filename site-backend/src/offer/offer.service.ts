import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { FlatOffer } from './interfaces/flat_offer.interface';
import { ExtSource } from './interfaces/ext_source.interface';

@Injectable()
export class FlatOfferService {

    constructor(
        @InjectModel('FlatOffer') private readonly flatOfferModel: Model<FlatOffer>,
        @InjectModel('ExtSource') private readonly extSourceModel: Model<ExtSource>,
    ) {}

    async getFlatOffers(): Promise<FlatOffer[]> {
        const flatOffers = await this.flatOfferModel.find({ is_active: true }).populate('source').sort({createdAt: -1}).exec();
        return flatOffers;
    }

    async getFlatOffersByDate(filters?: any, page: number = 0): Promise<FlatOffer[]> {
        const limit = 5;
        const extSources = ['cian_flat_offer_np', 'yandex_flat_offer_np_realty', 'avito_flat_offer_np'];

        const flatGroupOffers = await this.flatOfferModel.aggregate([
            {
                $match: { is_active: true }
            },
            {
                $lookup: {
                    from: this.extSourceModel.collection.name,
                    let: { source: '$source' },
                    as: 'source',
                    pipeline: [
                        {$match: {$expr: { $eq: ['$_id', '$$source'] }}},
                        {$match: {alias: {$in: extSources} }}
                    ]
                }
            },
            {
                $unwind: '$source'
            },
            {
                $project: {
                    'source._id': 1,
                    'source.name': 1,
                    'source.is_active': 1,
                    '_id': 1,
                    'createdAt': 1,
                    'updatedAt': 1,
                    'ext_id': 1,
                    'ext_full_url': 1,
                    'ext_updated_at': 1,
                    'floor_number': 1,
                    'floors_total': 1,
                    'location': 1,
                    'price': 1,
                    'rooms_count': 1,
                }
            },
            {
                $group: {
                    _id: {
                        createdAt: {
                            $dateToString: { format: '%Y-%m-%d', date: '$createdAt' }
                        }
                    },
                    results: { $push: '$$ROOT' }
                }
            },
            { $sort: { _id: -1, createdAt: 1 } },
            { $limit: (limit * (page + 1)) },
            { $skip: (limit * page) }
        ]);
        return flatGroupOffers;
    }

    async getFlatOffer(flatOfferID): Promise<FlatOffer> {
        const flatOffer = await this.flatOfferModel.findById(flatOfferID).populate('source').exec();
        return flatOffer;
    }

}
