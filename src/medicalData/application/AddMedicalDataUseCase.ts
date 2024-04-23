import { MedicalData } from "../domain/MedicalData";
import { MedicalDataRepository } from "../domain/MedicalDataRepository";
import { IHealthService } from "./services/HealthService";

export class AddMedicalDataUseCase{
    constructor(
        readonly medicalDataRepository: MedicalDataRepository,
        readonly healthService: IHealthService    
    ){}

    async run(
        temperature: number,
        bpm: number, 
        aceleration: number
    ): Promise<MedicalData|null>{
        try{
            const health = this.healthService.generateHealthStatus(bpm, temperature);

            const objectData = new MedicalData(
                "",
                temperature,
                bpm,
                aceleration,
                health,
                new Date()
            );

            const newMedicalData = await this.medicalDataRepository.addMedicalData(objectData);
            return newMedicalData;
        } catch(error){
            return null;
        }
    }
}