import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ServerService } from './services/server.service';
import { FooterComponent } from "./components/footer/footer.component";
import { GridComponent } from "./components/grid/grid.component";
import { HeaderComponent } from "./components/header/header.component";

const lineTemplate = Array.from({ length: 10 }, (v, k) => '');
const gridTemplate = Array.from({ length: 10 }, (v, k) => lineTemplate);

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, FooterComponent, GridComponent, HeaderComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    generating = false;
    grid = gridTemplate;

    inputedChar = '';

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
}
