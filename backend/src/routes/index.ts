import { Express, Request, Response } from 'express';
import { firstController } from '../controllers';

const routerSetup = (app: Express) =>
    app.get('/', firstController);

export default routerSetup;