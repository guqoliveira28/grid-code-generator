import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ServerService } from './services/server.service';
import { FooterComponent } from "./components/footer/footer.component";
import { GridComponent } from "./components/grid/grid.component";
import { HeaderComponent } from "./components/header/header.component";
import { PaymentsComponent } from "./components/payments/payments.component";

const lineTemplate = Array.from({ length: 10 }, (v, k) => '');
const gridTemplate = Array.from({ length: 10 }, (v, k) => lineTemplate);

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, FooterComponent, GridComponent, HeaderComponent, PaymentsComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    // Simple approach to handle multiple pages
    // This should have a more complex logic for better development and scalability
    currentPage: 'generator-page' | 'payments-page' = 'generator-page';

    generating = false;
    grid = gridTemplate;

    inputedChar = '';
    code = '';

    constructor(private readonly serverService: ServerService) { }

    startGenerating(): void {
        this.generating = true;
        this.updateGrid();
        setInterval(() => {
            this.updateGrid();
        }, 2000);
    }

    private updateGrid(): void {
        this.serverService.getGrid(this.inputedChar !== '' ? this.inputedChar : undefined).subscribe(
            response => { this.grid = response; }
        );
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
