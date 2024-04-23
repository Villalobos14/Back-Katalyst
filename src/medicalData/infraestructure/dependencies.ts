import { GetAllMedicalDataUseCase } from "../application/GetAllMedicalDataUseCase";
import { AddMedicalDataUseCase } from "../application/AddMedicalDataUseCase";

import { GetAllMedicalDataController } from "./controllers/GetAllMedicalDataController";
import { AddMedicalDataController } from "./controllers/AddMedicalDataController";

import { MedicalDataMongodbRepository } from "./adapters/mongodb/MedicalDataMongodbRepository";

import { HealthService } from "./services/HealthService";

export const mongodbRepository = new MedicalDataMongodbRepository();
export const healthService = new HealthService();

export const getAllMedicalDataUseCase = new GetAllMedicalDataUseCase(mongodbRepository);
export const addMedicalDataUseCase = new AddMedicalDataUseCase(mongodbRepository, healthService);

export const getAllMedicalDataController = new GetAllMedicalDataController(getAllMedicalDataUseCase);
export const addMedicalDataController = new AddMedicalDataController(addMedicalDataUseCase);