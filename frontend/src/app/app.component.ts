import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ServerService } from '../services/server.service';

const lineTemplate = Array.from({ length: 10 }, (v, k) => '');
const gridTemplate = Array.from({ length: 10 }, (v, k) => lineTemplate);

@Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'Generator Page';
    grid = gridTemplate;
    inputedChar = '';

    constructor(private readonly serverService: ServerService) { }

    handleGenerateClick(): void {
        this.updateGrid();
        setInterval(() => {
            this.updateGrid();
        }, 2000);
    }

    private updateGrid(): void {
        if (this.inputedChar !== '') {
            this.serverService.getGrid(this.inputedChar).subscribe(
                response => { this.grid = response; }
            );
        } else {
            this.serverService.getGrid().subscribe(
                response => { this.grid = response; }
            );
        }
    }



}
