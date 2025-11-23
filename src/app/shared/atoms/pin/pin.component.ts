import {Component, Input} from '@angular/core';
import {ThemeColor} from "../../../core/themeColor/theme-color-type";
import {ThemeColorService} from "../../../core/themeColor/theme-color.service";

@Component({
  selector: 'app-pin',
  standalone: true,
  imports: [],
  templateUrl: './pin.component.html',
  styleUrl: './pin.component.css'
})
export class PinComponent {
  @Input() color: ThemeColor = "green";
  @Input() text: string = "";

  constructor(
    public themeService: ThemeColorService
  ) {}
}
