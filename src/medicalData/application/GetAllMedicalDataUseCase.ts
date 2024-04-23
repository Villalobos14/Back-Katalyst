import { MedicalData } from "../domain/MedicalData";
import { MedicalDataRepository } from "../domain/MedicalDataRepository";

export class GetAllMedicalDataUseCase{
    constructor(readonly medicalDataRepository: MedicalDataRepository){}

    async run(): Promise<MedicalData[]|null>{
        try{
            const medicalData = await this.medicalDataRepository.getMedicalData();
            return medicalData;
        } catch(error){
            return null;
        }
    }
}