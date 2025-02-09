import { Express } from 'express';
import { generateCodeController, generateGridController, healthCheckController } from '../controllers/generatorControllers';

module.exports = (app: Express) => {
    app.get('/', healthCheckController);
    app.get('/grid', generateGridController);
    app.post('/code', generateCodeController);
}