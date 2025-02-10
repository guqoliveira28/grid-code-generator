import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ServerService } from './services/server.service';
import { FooterComponent } from "./components/footer/footer.component";
import { GridComponent } from "./components/grid/grid.component";
import { HeaderComponent } from "./components/header/header.component";
import { PaymentsComponent } from "./components/payments/payments.component";
import { WebSocketService } from './services/web-socket.service';

const lineTemplate = Array.from({ length: 10 }, (v, k) => '');
const gridTemplate = Array.from({ length: 10 }, (v, k) => lineTemplate);

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, FooterComponent, GridComponent, HeaderComponent, PaymentsComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
    // Simple approach to handle multiple pages
    // This should have a more complex logic for better development and scalability
    currentPage: 'generator-page' | 'payments-page' = 'generator-page';

    generating = false;
    grid = gridTemplate;

    inputedChar = '';
    code = '';

    constructor(private readonly socketService: WebSocketService) { }

    ngOnInit(): void {
        this.socketService.onGridUpdate((grid: Array<string[]>) => {
            if (grid && grid.length > 0) {
                this.generating = true;
            }
            this.grid = grid;
        });

        this.socketService.onCodeUpdate((code: string) => {
            this.code = code;
        });
    }

    startGenerating(): void {
        this.socketService.startGenerating();
    }

    handlePageChange() {
        this.currentPage =
            this.currentPage === 'generator-page'
                ?
                'payments-page'
                :
                'generator-page'
    }
}
