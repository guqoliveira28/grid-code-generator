import { Injectable } from "@angular/core";
import { io, Socket } from "socket.io-client";
import { IPayment } from "./server.service";

@Injectable({ providedIn: 'root' })
export class WebSocketService {
    private webSocket: Socket;

    constructor() {
        this.webSocket = io("http://localhost:3000");
    }

    startGenerating(): void {
        this.webSocket.emit('start');
    }

    onGridUpdate(callback: (grid: Array<string[]>) => void): void {
        this.webSocket.on('grid', callback)
    }

    onCodeUpdate(callback: (code: string) => void): void {
        this.webSocket.on('code', callback)
    }

    onPaymentsUpdate(callback: (payments: (IPayment | undefined)[]) => void): void {
        this.webSocket.on('payments', callback)
    }
}