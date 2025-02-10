import { IPayment } from "./payments";

export interface ServerToClientEvents {
    noArg: () => void;
    grid: (grid: Array<string[]>) => void;
    code: (code: string) => void;
    payments: (payments: (IPayment | undefined)[]) => void;
}

export interface ClientToServerEvents {
    start: () => void;
}

export interface InterServerEvents {
    ping: () => void;
}

export interface SocketData {
    name: string;
    age: number;
}