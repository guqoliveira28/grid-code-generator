import { Express } from 'express';
import { generateGridController, healthCheckController } from '../controllers';

const routerSetup = (app: Express) => {
    app.get('/', healthCheckController);
    app.get('/grid', generateGridController);
}

export default routerSetup;