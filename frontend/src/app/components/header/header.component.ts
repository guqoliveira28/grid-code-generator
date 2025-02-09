import { Component, model, output } from '@angular/core';

@Component({
    selector: 'app-header',
    imports: [],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {

    onGenerateBtnClick = output<void>();

    inputedChar = model();
    inputDisabled = false;

    getChar(event: Event): void {
        const char = (event.target as HTMLInputElement).value;
        if (char.length < 2) {
            this.inputedChar.update(() => char.toLowerCase());
        }

        this.inputDisabled = true;
        setTimeout(() => {
            this.inputDisabled = false;
        }, 4000);
    }

    handleGenerateClick(): void {
        this.onGenerateBtnClick.emit();
    }

}
