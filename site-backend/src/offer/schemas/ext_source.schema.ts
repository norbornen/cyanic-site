import { Schema } from 'mongoose';

export const ExtSourceSchema = new Schema(
    {
        createdAt: { type: Date, select: false },
        updatedAt: { type: Date, select: false },
        is_active: Boolean,
        name: String,
        alias: String,
        transport: { type: String, select: false },
        connection: { type: Object, select: false },
        pipes_before: { type: [String], select: false },
        factory: { type: String, select: false },
        frequency: { type: String, select: false },
        notification_channels: { type: [Schema.Types.ObjectId], select: false },
    },
    {
        collection: 'extsources',
        timestamps: true,
    }
);
