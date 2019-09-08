import { Document } from 'mongoose';
import { ExtSource } from './ext_source.interface';
import { Money } from './money.interface';

export interface FlatOffer extends Document {
    readonly createdAt: Date;
    readonly updatedAt: Date;
    readonly is_active: boolean;
    readonly source: string | ExtSource;
    readonly ext_id: string;
    readonly ext_full_url: string;
    readonly price: Money;
    readonly rooms_count: string;
    readonly floor_number?: string;
    readonly floors_total?: string;
    readonly location: {[index: string]: any};
}
