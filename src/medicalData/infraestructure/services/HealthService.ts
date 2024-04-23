import { IHealthService } from "../../application/services/HealthService";

export class HealthService implements IHealthService{
    generateHealthStatus(bpm: number, temperature: number): string {
        //ninos 5-6: 75 - 115bpm
        //ninos 7 - 10: 70 - 110bpm
        //personas 11+; 60 - 100bpm
        let status: string = 'Saludable';
        
        if (temperature > 37 || temperature < 35) {
            status = 'Moderado';
        }
        
        if (bpm < 60 || bpm > 115) {
            if(status === 'Saludable') status = 'Moderado';
            else status = 'Malo'
        }

        return status;
    }
}