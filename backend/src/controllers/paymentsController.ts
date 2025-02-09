import { Request, Response } from "express";
import { addPayment, deletePayment, getPayments, updatePayment } from "../services/paymentsService";


/**
 * Get all payments
 */
export function getPaymentsController(req: Request, res: Response) {

    const payments = getPayments(req.query.name ? req.query.name as string : undefined);
    
    res.status(200).json(payments);
}

/**
 * Add a payment
 * 
 * @param name payment name as string
 * @param ammount payment ammount as number
 * @param code payment generated code as string
 * @param grid payment generated grid as array of array of strings
 */
export function addPaymentsController(req: Request, res: Response) {

    if (!req.body.name || isNaN(req.body.ammount) || !req.body.code || !req.body.grid) {
        res.status(400).send('Invalid body params!');
        return;
    }

    const payment = addPayment(
        req.body.name,
        Number(req.body.ammount),
        req.body.code,
        req.body.grid,
    );

    if (!payment) {
        res.status(500).send('Payment already exists!');
        return;
    }
    
    res.status(200).json(payment);
}

/**
 * Update a payment
 * 
 * @param name payment name as string
 * @param ammount payment ammount as number
 * @param code payment generated code as string
 * @param grid payment generated grid as array of array of strings
 */
export function updatePaymentsController(req: Request, res: Response) {

    if (!req.body.name || isNaN(req.body.ammount) || !req.body.code || !req.body.grid) {
        res.status(400).send('Invalid body params!');
        return;
    }

    const payment = updatePayment(
        req.body.name,
        Number(req.body.ammount),
        req.body.code,
        req.body.grid,
    );

    if (!payment) {
        res.status(500).send('Payment doesn\'t exists!');
        return;
    }
    
    res.status(200).json(payment);
}

/**
 * Delete a payment
 * 
 * @param name payment name as string
 */
export function deletePaymentController(req: Request, res: Response) {

    if (!req.body.name) {
        res.status(400).send('Invalid body params!');
        return;
    }

    const success = deletePayment(req.body.name);

    if (!success) {
        res.status(500).send('Payment doesn\'t exists!');
        return;
    }
    
    res.status(200).send("Payment successfully deleted");
}
