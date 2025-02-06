import { Request, Response } from "express";
import { generateCode, generateGrid } from "../services/generatorService";

export function healthCheckController(req: Request, res: Response) {
    res.status(200).send('OK');
}

export function generateGridController(req: Request, res: Response) {
    const grid = generateGrid();
    res.status(200).json(grid);
}

export function generateCodeController(req: Request, res: Response) {
    if (!req.body.grid) {
        res.status(400).send('Invalid body params');
        return;
    }

    const code = generateCode(req.body.grid);

    if (!code) {
        res.status(500).json('Code was not generated!');
        return;
    }

    res.status(200).json(code);
    return;
}