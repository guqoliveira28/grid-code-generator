import { IPayment } from "../interfaces/payments";

// This should be stored in a database
const payments: IPayment[] = [];

/**
 * Get all payments or only the payment with the given name
 * @param name 
 * @returns array of payments
 */
export function getPayments(name?: string) {

    if (name) {
        return [payments.find(p => p.name === name)];
    }

    return payments;
}

/**
 * Add a payment
 * @param name 
 * @param ammount 
 * @param code 
 * @param grid 
 * @returns the created payment
 */
export function addPayment(name: string, ammount: number, code: string, grid: Array<string[]>) {
    if (payments.find(payment => payment.name === name)) {
        return null;
    }

    const payment: IPayment = {
        name,
        ammount,
        code,
        grid
    };

    payments.push(payment);

    global.io.emit('payments', payments);

    return payment;
}

/**
 * Updates a payment by given name
 * @param name 
 * @param ammount 
 * @param code 
 * @param grid 
 * @returns Updated payment
 */
export function updatePayment(name: string, ammount: number, code: string, grid: Array<string[]>) {

    const payment: IPayment | undefined = payments.find(payment => payment.name === name);

    if (!payment) {
        return null;
    }

    payment.ammount = ammount;
    payment.code = code;
    payment.grid = grid;

    return payment;
}

export function deletePayment(name: string) {

    const paymentIndex: number = payments.map(p => p.name).indexOf(name);

    if (paymentIndex > -1) {
        payments.splice(paymentIndex, 1);
        return true;
    }

    return false;
}