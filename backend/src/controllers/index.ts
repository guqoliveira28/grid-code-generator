import { Request, Response } from "express";
import { getMessage } from "../services";


export function firstController(req: Request, res: Response) {
    const message = getMessage();
    res.status(200).send(message);
}