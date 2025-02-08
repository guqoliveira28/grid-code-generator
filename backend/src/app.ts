import express from 'express';
import routerSetup from './routes';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

const APP_PORT = 3000;

app.use(cors());

app.use(bodyParser.json())

app.listen(APP_PORT, () => {
    console.log(`Server started on port ${APP_PORT}`);
});

routerSetup(app);
