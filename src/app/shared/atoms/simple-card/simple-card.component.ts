import { Component, Input } from '@angular/core';
import { ThemeColor } from '../../../core/themeColor/theme-color-type';
import { ThemeColorService } from '../../../core/themeColor/theme-color.service';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-simple-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './simple-card.component.html',
  styleUrl: './simple-card.component.css',
  host: {
    '[style.--backgroundColor]': 'this.colorService.simpleCardBGColor(color)',
    '[style.--borderColor]': 'this.colorService.simpleCardBorderColor(color)',
    '[style.--align]': 'this.align',
    "[class.interactable]": "this.interactable",
    "[style.--direction]": "this.direction",
    "[style.--min-width]": "this.minWidth+'px'",
    "[style.--margin]": "this.marginPx+'px'",
    "[style.--marginX]": "this.marginXPx+'px'",
    "[style.--justify-content]": "this.justifyContent",
    "[style.--align-items]": "this.alignItems",
    "[style.gap]": "this.gapPx+'px'",
    "[style.padding]": "this.paddingYPx+'px '+this.paddingPx+'px'",
  }
})
export class SimpleCardComponent {
  @Input() color: ThemeColor = "green";
  @Input() paddingPx: number = 20;
  @Input() paddingYPx: number = this.paddingPx;
  @Input() align: string = "left";
  @Input() interactable: boolean = false;
  @Input() direction: string = "row";
  @Input() minWidth: number = 0;
  @Input() marginPx: number = 0;
  @Input() marginXPx: number = 0;
  @Input() justifyContent: string = "normal";
  @Input() alignItems: string = "normal";
  @Input() gapPx: number = 0;

  constructor(public colorService: ThemeColorService) {
  }
}
