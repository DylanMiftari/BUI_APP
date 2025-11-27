import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from "@angular/common";

@Component({
    selector: 'app-casino-card',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './casino-card.component.html',
    styleUrl: './casino-card.component.css'
})
export class CasinoCardComponent {
    @Input() color: number = 1; // 1: Spades, 2: Hearts, 3: Diamonds, 4: Clubs
    @Input() value: number = 1;
    @Input() hidden: boolean = false;
    @Output() cardClick = new EventEmitter<void>();

    onClick() {
        this.cardClick.emit();
    }

    get isRed(): boolean {
        return this.color === 2 || this.color === 3;
    }

    get displaySuit(): string {
        switch (this.color) {
            case 1: return '♠';
            case 2: return '♥';
            case 3: return '♦';
            case 4: return '♣';
            default: return '?';
        }
    }

    get displayValue(): string {
        switch (this.value) {
            case 1: return 'A';
            case 11: return 'J';
            case 12: return 'Q';
            case 13: return 'K';
            default: return this.value.toString();
        }
    }
}
