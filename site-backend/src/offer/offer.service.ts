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
        const flatOffers = await this.flatOfferModel.find().populate('source').exec();
        return flatOffers;
    }

    async getFlatOffer(flatOfferID): Promise<FlatOffer> {
        const flatOffer = await this.flatOfferModel.findById(flatOfferID).populate('source').exec();
        return flatOffer;
    }

}
