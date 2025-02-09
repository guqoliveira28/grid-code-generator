import { Component, input, model, OnChanges, SimpleChanges } from '@angular/core';
import { ServerService } from '../../services/server.service';

@Component({
    selector: 'app-footer',
    imports: [],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnChanges {
    generating = input(false);
    readonly grid = input.required<Array<string[]>>();

    code = model<string>('');

    constructor(private readonly serverService: ServerService) { }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['grid']) {
            if (this.grid()[0][0] !== '') {
                this.serverService.getCode(this.grid()).subscribe(
                    response => { this.code.update(() => response); }
                );
            }
        }
    }


}
