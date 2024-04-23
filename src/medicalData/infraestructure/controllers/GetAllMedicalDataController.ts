import { Request, Response } from "express";
import { GetAllMedicalDataUseCase } from "../../application/GetAllMedicalDataUseCase";

export class GetAllMedicalDataController{
    constructor(readonly getAllMedicalDataUseCase: GetAllMedicalDataUseCase){}

    async run(req: Request, res: Response){
        const medicalData = await this.getAllMedicalDataUseCase.run();
        if(medicalData){
            res.status(200).json({
                status: 'success',
                message: "Datos médicos obtenidos correctamente",
                data: medicalData
            });
        } else {
            res.status(500).json({
                status: 'error',
                message: "Error al obtener datos médicos"
            });
        }
    }
}