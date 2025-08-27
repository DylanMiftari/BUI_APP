import { Component, Input } from '@angular/core';
import {ThemeColorService} from "../../../core/themeColor/theme-color.service";

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
  @Input() color: string = "black";
  @Input() fontSizePx: number = 24;

  constructor(public colorService: ThemeColorService) {
  }
}
