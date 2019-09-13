import { Controller, Get, Res, HttpStatus, Param, NotFoundException } from '@nestjs/common';
import { FlatOfferService } from './offer.service';
import { ValidateObjectId } from '../shared/pipes/validate-object-id.pipes';

@Controller('offer')
export class FlatOfferController {

    constructor(private flatOfferService: FlatOfferService) {}

    @Get()
    async getFlatOffers() {
        return this.flatOfferService.getFlatOffers();
    }

    @Get('/by_date')
    async getFlatOffersByDate() {
        return this.flatOfferService.getFlatOffersByDate();
    }

    @Get('/:flatOfferID')
    async getFlatOffer(@Param('flatOfferID', new ValidateObjectId()) flatOfferID) {
        const item = await this.flatOfferService.getFlatOffer(flatOfferID);
        if (!item) {
            throw new NotFoundException('Flat offer does not exist!');
        }
        return item;
    }

}
