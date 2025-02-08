import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class ServerService {
    private url = 'http://127.0.0.1:3000';

    private readonly http: HttpClient = inject(HttpClient);

    public getGrid(char?: string): Observable<Array<string[]>> {
        return this.http.get<Array<string[]>>(`${this.url}/grid?char=${char}`);
    }
}