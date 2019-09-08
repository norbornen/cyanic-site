import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { FlatOfferModule } from './offer/offer.module';

@Module({
    imports: [
        MongooseModule.forRoot('mongodb://localhost/cyanic', { useNewUrlParser: true }),
        FlatOfferModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
