import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ThemeColorService } from '../../../core/themeColor/theme-color.service';
import { ThemeColor } from '../../../core/themeColor/theme-color-type';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
  host: {
    '[style.--shadow-color]': 'themeColorService.shadowColor(color)',
    '[style.--simple-color]': 'themeColorService.simpleColor(color)'
  }
})
export class ButtonComponent {
  @Input() label!: string;
  @Input() color: ThemeColor = "green";
  @Input() isOutlined: boolean = false;
  @Input() type: "submit" | "button" = "button";
  @Input() paddingXPx: number = 32;
  @Input() paddingYPx: number = 16;
  @Output() clicked = new EventEmitter<void>();

  constructor(public themeColorService: ThemeColorService) {}

  clickOnButton() {
    this.clicked.emit();
  }
}
