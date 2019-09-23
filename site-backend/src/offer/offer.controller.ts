import { Controller, Get, Query, Param, NotFoundException, ParseIntPipe } from '@nestjs/common';
import { FlatOfferService } from './offer.service';
import { ValidateObjectId } from '../shared/pipes/validate-object-id.pipes';

@Controller('offer')
export class FlatOfferController {

    constructor(private flatOfferService: FlatOfferService) {}

    @Get('/by_date')
    async getFlatOffersByDate(@Query('filters') filters?: string, @Query('page', new ParseIntPipe()) page?: number) {
        return this.flatOfferService.getFlatOffersByDate(filters, page);
    }

    @Get()
    async getFlatOffers() {
        return this.flatOfferService.getFlatOffers();
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
