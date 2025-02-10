import { Component, input, OnInit } from '@angular/core';
import { IPayment, ServerService } from '../../services/server.service';
import { WebSocketService } from '../../services/web-socket.service';

@Component({
    selector: 'app-payments',
    imports: [],
    templateUrl: './payments.component.html',
    styleUrl: './payments.component.scss'
})
export class PaymentsComponent implements OnInit {
    code = input<string>();
    grid = input<Array<string[]>>();

    payments: (IPayment | undefined)[] = Array.from({ length: 10 });

    newPayment = {
        name: '',
        ammount: 0
    };

    constructor(
        private readonly serverService: ServerService,
        private readonly socketService: WebSocketService,
    ) { }

    ngOnInit(): void {
        this.socketService.onPaymentsUpdate((payments: (IPayment | undefined)[]) => {
            this.payments = payments;
            this.addNewLines();
        });

        this.updatePayments();
    }

    private updatePayments(): void {
        this.serverService.getPayments().subscribe(
            response => {
                this.payments = response;
                this.addNewLines();
            }
        );
    }

    private addNewLines(): void {
        while (this.payments.length < 7) {
            this.payments.push(undefined);
        }
    }

    getName(event: Event): void {
        const name = (event.target as HTMLInputElement).value;
        this.newPayment.name = name;
    }

    getAmmount(event: Event): void {
        const ammount = (event.target as HTMLInputElement).value;
        if (!isNaN(Number(ammount))) {
            this.newPayment.ammount = Number(ammount);
        }
    }

    handleAddPaymentClick(): void {
        if (this.grid() && this.code() && this.newPayment.name !== "" && this.newPayment.ammount > 0) {
            const payment: IPayment = {
                name: this.newPayment.name,
                ammount: this.newPayment.ammount,
                code: this.code()!,
                grid: this.grid()!
            }
            this.serverService.addPayment(payment).subscribe(
                () => {
                    this.newPayment = {
                        name: '',
                        ammount: 0
                    };
                    this.updatePayments();
                }
            );
        }
    }
}
