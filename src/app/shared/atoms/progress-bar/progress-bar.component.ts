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
    '[style.--color]': 'this.colorService.simpleColor(color)'
  }
})
export class ProgressBarComponent {
  @Input() maxValue: number = 100;
  @Input() value: number = 45;
  @Input() color: ThemeColor = "green";

  constructor(private colorService: ThemeColorService) {}

  get valuePercent(): number {
    return this.value * 100 / this.maxValue;
  }
}
