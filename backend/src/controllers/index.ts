import { Request, Response } from "express";
import { generateGrid } from "../services/generatorService";

export function healthCheckController(req: Request, res: Response) {
    res.status(200).send('OK');
}

export function generateGridController(req: Request, res: Response) {
    const grid = generateGrid();
    res.status(200).json(grid);
}