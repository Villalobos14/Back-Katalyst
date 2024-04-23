import { Request, Response } from 'express';
import { AddMedicalDataUseCase } from '../../application/AddMedicalDataUseCase';

export class AddMedicalDataController{
    constructor(readonly addMedicalDataUseCase: AddMedicalDataUseCase){}

    async run(req: Request, res: Response){
        const {temperature, BPM, accelerationZ} = req.body;
        const newMedicalData = await this.addMedicalDataUseCase.run(temperature, BPM, accelerationZ);
        if(newMedicalData){
            res.status(201).json({
                status: 'success',
                message: "Datos médicos añadidos correctamente",
                data: newMedicalData
            });
        } else {
            res.status(500).json({
                status: 'error',
                message: "Error al añadir datos médicos"
            });
        }
    }
}