export interface IHealthService{
    generateHealthStatus(bpm: number, temperature:number): string;
}