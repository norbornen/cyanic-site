import { Schema } from 'mongoose';

export const FlatOfferSchema = new Schema(
    {
        createdAt: Date,
        updatedAt: Date,
        is_active: Boolean,
        //
        source: { type: Schema.Types.ObjectId, ref: 'ExtSource' },
        ext_id: String,
        ext_full_url: String,
        ext_data: { type: Object, select: false },
        ext_updated_at: Date,
        is_notifications_send: Boolean,
        //
        price: Object,
        rooms_count: String,
        floor_number: String,
        floors_total: String,
        location: Object,
    },
    {
        collection: 'offers',
        timestamps: true
    }
);
