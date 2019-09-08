import { Controller, Get, Res, HttpStatus, Param, NotFoundException } from '@nestjs/common';
import { FlatOfferService } from './offer.service';
import { ValidateObjectId } from '../shared/pipes/validate-object-id.pipes';

@Controller('offer')
export class FlatOfferController {

    constructor(private flatOfferService: FlatOfferService) {}

    @Get()
    async getFlatOffers(@Res() res) {
        const items = await this.flatOfferService.getFlatOffers();
        return res.status(HttpStatus.OK).json(items);
    }

    @Get('/:flatOfferID')
    async getFlatOffer(@Res() res, @Param('flatOfferID', new ValidateObjectId()) flatOfferID) {
        const item = await this.flatOfferService.getFlatOffer(flatOfferID);
        if (!item) {
            throw new NotFoundException('Post does not exist!');
        }
        return res.status(HttpStatus.OK).json(item);
    }

}
