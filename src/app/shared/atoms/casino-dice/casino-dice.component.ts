import { Component, Input } from '@angular/core';
import { CommonModule } from "@angular/common";

@Component({
    selector: 'app-casino-dice',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './casino-dice.component.html',
    styleUrl: './casino-dice.component.css'
})
export class CasinoDiceComponent {
    @Input() value: number = 1;

    get dots() {
        return new Array(this.value);
    }
}
