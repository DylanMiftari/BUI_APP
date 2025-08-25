import { Component, Input } from '@angular/core';
import { ThemeColor } from '../../../core/themeColor/theme-color-type';
import { ThemeColorService } from '../../../core/themeColor/theme-color.service';

@Component({
  selector: 'app-simple-card',
  standalone: true,
  imports: [],
  templateUrl: './simple-card.component.html',
  styleUrl: './simple-card.component.css',
  host: {
    '[style.--backgroundColor]': 'this.colorService.simpleCardBGColor(color)',
    '[style.--borderColor]': 'this.colorService.simpleCardBorderColor(color)',
    '[style.--padding]': 'this.paddingPx+"px"',
    '[style.--align]': 'this.align'
  }
})
export class SimpleCardComponent {
  @Input() color: ThemeColor = "green";
  @Input() paddingPx: number = 20;
  @Input() align: string = "left";

  constructor(private colorService: ThemeColorService) {
  }
}
