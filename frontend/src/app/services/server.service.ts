import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";

export interface IPayment {
    name: string,
    ammount: number,
    code: string,
    grid: Array<string[]>
}

@Injectable({ providedIn: 'root' })
export class ServerService {
    private url = 'http://127.0.0.1:3000';

    private readonly http: HttpClient = inject(HttpClient);

    public getGrid(char?: string): Observable<Array<string[]>> {
        const queryParams = char ? `?char=${char}` : '';
        return this.http.get<Array<string[]>>(`${this.url}/grid${queryParams}`);
    }

    public getCode(grid: Array<string[]>): Observable<string> {
        return this.http.post<string>(`${this.url}/code`, { grid: grid });
    }

    public getPayments(): Observable<IPayment[]> {
        return this.http.get<IPayment[]>(`${this.url}/payments`);
    }

    public addPayment(payment: IPayment): Observable<IPayment> {
        return this.http.post<IPayment>(`${this.url}/addpayment`, {
            name: payment.name,
            ammount: payment.ammount,
            code: payment.code,
            grid: payment.grid
        });
    }
}