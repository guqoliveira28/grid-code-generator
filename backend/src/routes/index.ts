import { Express } from 'express';
import { generateCodeController, generateGridController, healthCheckController } from '../controllers';

const routerSetup = (app: Express) => {
    app.get('/', healthCheckController);
    app.get('/grid', generateGridController);
    app.post('/code', generateCodeController);
}

export default routerSetup;