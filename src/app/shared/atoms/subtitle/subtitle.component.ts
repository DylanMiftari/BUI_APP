import { Component, Input } from '@angular/core';
import {ThemeColorService} from "../../../core/themeColor/theme-color.service";
import {ThemeColor} from "../../../core/themeColor/theme-color-type";

@Component({
  selector: 'app-subtitle',
  standalone: true,
  imports: [],
  templateUrl: './subtitle.component.html',
  styleUrl: './subtitle.component.css',
  host: {
    '[style.--color]': 'this.colorService.simpleColor(this.color)'
  }
})
export class SubtitleComponent {
  @Input() text!: string;
  @Input() color: ThemeColor = "black";
  @Input() fontSizePx: number = 24;
  @Input() textAlign: string = "left";

  constructor(public colorService: ThemeColorService) {
  }
}
