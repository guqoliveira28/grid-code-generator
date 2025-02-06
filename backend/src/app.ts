import express from 'express';
import routerSetup from './routes';
const app = express();

const APP_PORT = 3000;

app.listen(APP_PORT, () => {
    console.log(`Server started on port ${APP_PORT}`);
});

routerSetup(app);
