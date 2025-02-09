import { Component, input, OnInit } from '@angular/core';
import { IPayment, ServerService } from '../../services/server.service';

@Component({
    selector: 'app-payments',
    imports: [],
    templateUrl: './payments.component.html',
    styleUrl: './payments.component.scss'
})
export class PaymentsComponent implements OnInit {
    code = input<string>();

    payments: IPayment[] = [];

    constructor(private readonly serverService: ServerService) { }

    ngOnInit(): void {
        this.updatePayments();
    }

    private updatePayments(): void {
        this.serverService.getPayments().subscribe(
            response => { this.payments = response; }
        );
    }
}
