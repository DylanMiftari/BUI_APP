import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ThemeColorService } from '../../../core/themeColor/theme-color.service';
import { ThemeColor } from '../../../core/themeColor/theme-color-type';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  host: {
    '[style.--gradient]': '"var("+[this.colorService.cssVarFromColor(color)]+")"'
  }
})
export class CardComponent {
  @Input() paddingPx: number = 10;
  @Input() bordered: boolean = true;
  @Input() glassCard: boolean = false;
  @Input() color: ThemeColor = "green";
  @Output() clicked = new EventEmitter<void>();
  @Input() alignItems: string = "flex-start";
  @Input() interactable: boolean = true;

  constructor(protected colorService: ThemeColorService) {}

  clickOnCard() {
    this.clicked.emit();
  }
}
