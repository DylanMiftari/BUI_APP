import { Component, Input } from '@angular/core';
import { ThemeColorService } from '../../../core/themeColor/theme-color.service';

@Component({
  selector: 'app-level-pin',
  standalone: true,
  imports: [],
  templateUrl: './level-pin.component.html',
  styleUrl: './level-pin.component.css',
  host: {
    '[style.--gradient]': '"var("+[colorService.cssVarFromColor("black")]+")"'
  }
})
export class LevelPinComponent {
  @Input() level: number = 1;

  constructor(private colorService: ThemeColorService) {}
}
