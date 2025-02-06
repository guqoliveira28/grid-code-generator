import express from 'express';
import routerSetup from './routes';
import bodyParser from 'body-parser';
const app = express();

const APP_PORT = 3000;

app.use(bodyParser.json())

app.listen(APP_PORT, () => {
    console.log(`Server started on port ${APP_PORT}`);
});

routerSetup(app);
