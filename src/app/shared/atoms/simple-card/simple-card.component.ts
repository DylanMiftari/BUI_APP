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
    '[style.--padding]': 'this.paddingPx+"px"',
    '[style.--align]': 'this.align',
    "[class.interactable]": "this.interactable",
  }
})
export class SimpleCardComponent {
  @Input() color: ThemeColor = "green";
  @Input() paddingPx: number = 20;
  @Input() align: string = "left";
  @Input() interactable: boolean = false;

  constructor(public colorService: ThemeColorService) {
  }
}
