import { Document } from 'mongoose';

export interface ExtSource extends Document {
    readonly createdAt?: Date;
    readonly updatedAt?: Date;
    readonly is_active: boolean;
    readonly name: string;
    readonly provider?: string;
}
