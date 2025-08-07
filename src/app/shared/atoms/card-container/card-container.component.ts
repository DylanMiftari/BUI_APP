import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-container',
  standalone: true,
  imports: [],
  templateUrl: './card-container.component.html',
  styleUrl: './card-container.component.css',
  host: {
    '[style.--card-base-size]': '[cardBaseSizePx]+"px"'
  }
})
export class CardContainerComponent {
  @Input() paddingXPx: number = 20;
  @Input() paddingYPx: number = 20;
  @Input() gapPx: number = 20;
  @Input() cardBaseSizePx: number = 300;
}
