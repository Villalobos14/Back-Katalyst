import { MedicalDataRepository } from "../../../domain/MedicalDataRepository";
import { MedicalData } from "../../../domain/MedicalData";
import { MedicalDataMongodbModel } from "./MedicalDataMongodbSchema";

export class MedicalDataMongodbRepository implements MedicalDataRepository{
    async addMedicalData(medicalData: MedicalData): Promise<MedicalData|null>{
        try{
            const newMedicalData = new MedicalDataMongodbModel({
                temperature: medicalData.temperature,
                bpm: medicalData.bpm,
                aceleration: medicalData.aceleration,
                status: medicalData.status,
                date: medicalData.datetime
            });

            await newMedicalData.save();
            return newMedicalData;
        } catch(error){
            return null;
        }
    }

    async getMedicalData(): Promise<MedicalData[]|null>{
        try{
            const medicalData = await MedicalDataMongodbModel.find();
            return medicalData;
        } catch(error){
            return null;
        }
    }
}
