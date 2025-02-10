import { Component, input, model, OnChanges, SimpleChanges } from '@angular/core';
import { ServerService } from '../../services/server.service';

@Component({
    selector: 'app-footer',
    imports: [],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss'
})
export class FooterComponent {
    generating = input(false);

    code = model<string>('');


}
