import { Component, Input } from '@angular/core';
import { ThemeColorService } from '../../../core/themeColor/theme-color.service';
import { ThemeColor } from '../../../core/themeColor/theme-color-type';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.css',
  host: {
    '[style.--color]': 'this.colorService.simpleColor(color)',
    '[style.min-width]': 'this.minWidthPx+"px"',
    '[style.max-width]': 'this.maxWidthPx+"px"',
    '[style.background-color]': 'this.darkBackGroundColor ? "rgba(30, 58, 138, 0.2)" : "rgba(255, 255, 255, 0.1)"'
  }
})
export class ProgressBarComponent {
  @Input() maxValue: number = 100;
  @Input() value: number = 45;
  @Input() color: ThemeColor = "green";
  @Input() minWidthPx: number | null = null;
  @Input() maxWidthPx: number | null = null;
  @Input() darkBackGroundColor: boolean = false;

  constructor(public colorService: ThemeColorService) {}

  get valuePercent(): number {
    return this.value * 100 / this.maxValue;
  }
}
