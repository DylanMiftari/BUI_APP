import {Component, Input} from '@angular/core';
import {ThemeColor} from "../../../core/themeColor/theme-color-type";
import {ThemeColorService} from "../../../core/themeColor/theme-color.service";

@Component({
  selector: 'app-themed-title',
  standalone: true,
  imports: [],
  templateUrl: './themed-title.component.html',
  styleUrl: './themed-title.component.css'
})
export class ThemedTitleComponent {
  @Input() color: ThemeColor = "green";
  @Input() title!: string;
  @Input() fontSizePx: number = 24;

  constructor(public themeColorService: ThemeColorService) {
  }
}
