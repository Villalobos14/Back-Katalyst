import { MedicalData } from "./MedicalData";

export interface MedicalDataRepository {
    addMedicalData(medicalData:MedicalData):Promise<MedicalData|null>;
    getMedicalData():Promise<MedicalData[]|null>;
}