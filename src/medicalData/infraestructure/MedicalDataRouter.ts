import express from 'express';

import {
    addMedicalDataController,
    getAllMedicalDataController
} from './dependencies';

const dataRouter = express.Router();

dataRouter.post('/', (req, res) => addMedicalDataController.run(req, res));
dataRouter.get('/', (req, res) => getAllMedicalDataController.run(req, res));

export { dataRouter };