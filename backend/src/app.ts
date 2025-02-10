import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { createServer } from 'http';
import { setupSockets } from './sockets/sockets';

const app = express();

const APP_PORT = 3000;

app.use(cors());

app.use(bodyParser.json())

// Sockets
const server = createServer(app);
setupSockets(server);

server.listen(APP_PORT, () => {
    console.log(`Server started on port ${APP_PORT}`);
});

require('./routes/generator')(app);
require('./routes/payments')(app);
