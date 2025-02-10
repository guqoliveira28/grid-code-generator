import { Server } from "http";
import { Server as SocketIoServer } from "socket.io";
import { ClientToServerEvents, InterServerEvents, ServerToClientEvents, SocketData } from "../interfaces/sockets";
import { generateCode, generateGrid } from "../services/generatorService";
import { getPayments } from "../services/paymentsService";

const lineTemplate = Array.from({ length: 10 }, (v, k) => '');
let grid = Array.from({ length: 10 }, (v, k) => lineTemplate);
let generating = false;

declare global {
    var io: SocketIoServer
}

export function setupSockets(httpServer: Server) {
    global.io = new SocketIoServer<
        ClientToServerEvents,
        ServerToClientEvents,
        InterServerEvents,
        SocketData
    >(httpServer, {
        cors: {
            origin: "*"
        }
    });

    io.on('connection', (socket) => {
        setInterval(() => {
            if (generating) {
                grid = generateGrid();
                socket.emit('grid', grid);
                socket.emit('code', generateCode(grid));
            }
        }, 2000);

        socket.on('start', () => {
            generating = true;
        });
    })
}
