import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FlatOfferSchema } from './schemas/flat_offer.schema';
import { ExtSourceSchema } from './schemas/ext_source.schema';
import { FlatOfferService } from './offer.service';
import { FlatOfferController } from './offer.controller';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: 'FlatOffer', schema: FlatOfferSchema },
            { name: 'ExtSource', schema: ExtSourceSchema }
        ])
    ],
    providers: [FlatOfferService],
    controllers: [FlatOfferController],
})
export class FlatOfferModule { }
