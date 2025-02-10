import { Request, Response } from "express";
import { generateCode, generateGrid } from "../services/generatorService";

/**
 * Simple server health check
 */
export function healthCheckController(req: Request, res: Response) {
    res.status(200).send('OK');
}

/**
 * Generate grid GET endpoint
 */
export function generateGridController(req: Request, res: Response) {
    let grid = [];
    if (req.query.char) {
        grid = generateGrid(req.query.char as string);
    } else {
        grid = generateGrid();
    }

    res.status(200).json(grid);
}

/**
 * Generate a two digit code form a given grid endpoint
 * 
 * POST body params:
 * @param grid
 */
export function generateCodeController(req: Request, res: Response) {
    if (!req.body.grid) {
        res.status(400).send('Invalid body params');
        return;
    }

    const code = generateCode(req.body.grid);

    if (!code) {
        res.status(500).send('Code was not generated!');
        return;
    }

    res.status(200).send(code);
    return;
}