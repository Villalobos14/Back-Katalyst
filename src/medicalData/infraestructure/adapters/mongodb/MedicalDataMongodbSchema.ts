import { MedicalData } from '../../../domain/MedicalData';
import mongoose, { Schema, Document } from 'mongoose';

type IMedicalData = MedicalData & Document;

const MedicalDataSchema: Schema = new Schema({
    temperature: { type: Number, required: true },
    bpm: { type: Number, required: true },
    aceleration: { type: Number, required: true },
    status: { type: String, required: false },
    date: { type: Date, required: true }
});

MedicalDataSchema.virtual('id').get(function (this: IMedicalData) {
    return this._id.toHexString();
});

MedicalDataSchema.set('toJSON', {
    virtuals: true,
});


const MedicalDataMongodbModel =  mongoose.model<IMedicalData>('MedicalData', MedicalDataSchema);

export { MedicalDataMongodbModel };