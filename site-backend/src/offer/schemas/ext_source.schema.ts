import { Schema } from 'mongoose';

export const ExtSourceSchema = new Schema(
    {
        createdAt: { type: Date, select: false },
        updatedAt: { type: Date, select: false },
        is_active: Boolean,
        name: String,
        provider: { type: String, select: false },
        connection: { type: Object, select: false }
    },
    {
        collection: 'extsources'
    }
);
