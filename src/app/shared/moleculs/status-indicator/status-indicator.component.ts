import { Component, Input } from '@angular/core';
import { ThemeColor } from '../../../core/themeColor/theme-color-type';
import { ThemeColorService } from '../../../core/themeColor/theme-color.service';

@Component({
  selector: 'app-status-indicator',
  standalone: true,
  imports: [],
  templateUrl: './status-indicator.component.html',
  styleUrl: './status-indicator.component.css'
})
export class StatusIndicatorComponent {
  @Input() text!: string;
  @Input() color: string = "#22c55e";
  @Input() pinSizePx: number = 12;
  @Input() textColor: string = "black";

  constructor(private colorService: ThemeColorService) {}
}
