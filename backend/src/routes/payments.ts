import { Express } from 'express';
import { addPaymentsController, deletePaymentController, getPaymentsController, updatePaymentsController } from '../controllers/paymentsController';

module.exports = (app: Express) => {
    app.get('/payments', getPaymentsController);
    app.post('/addpayment', addPaymentsController);
    app.put('/updatepayment', updatePaymentsController);
    app.delete('/deletepayment', deletePaymentController);
}