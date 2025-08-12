import { Component, Input } from '@angular/core';
import { ThemeColorService } from '../../../core/themeColor/theme-color.service';
import { ThemeColor } from '../../../core/themeColor/theme-color-type';

@Component({
  selector: 'app-level-pin',
  standalone: true,
  imports: [],
  templateUrl: './level-pin.component.html',
  styleUrl: './level-pin.component.css',
  host: {
    '[style.--gradient]': '"var("+[colorService.cssVarFromColor(color)]+")"'
  }
})
export class LevelPinComponent {
  @Input() level: number = 1;
  @Input() color: ThemeColor = "black";

  constructor(private colorService: ThemeColorService) {}
}
