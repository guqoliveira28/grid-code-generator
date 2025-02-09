import { Component, input } from '@angular/core';
import { ServerService } from '../../services/server.service';

@Component({
    selector: 'app-grid',
    imports: [],
    templateUrl: './grid.component.html',
    styleUrl: './grid.component.scss'
})
export class GridComponent {
    grid = input<Array<string[]>>([]);
}
