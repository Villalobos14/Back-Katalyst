export class MedicalData{
    constructor(
        readonly id:string,
        readonly temperature:number,
        readonly bpm:number,
        readonly aceleration:number,
        readonly status:string,
        readonly datetime:Date
    ){}
}