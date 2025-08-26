import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ThemeColor } from '../../../core/themeColor/theme-color-type';
import { ThemeColorService } from '../../../core/themeColor/theme-color.service';

@Component({
  selector: 'app-simple-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './simple-text.component.html',
  styleUrl: './simple-text.component.css'
})
export class SimpleTextComponent {
  @Input() text!: string;
  @Input() isLight: boolean = false;
  @Input() color: ThemeColor | null = null;
  @Input() bold: boolean = false;
  @Input() textAlign: string = "left";
  @Input() fontSizePx: number = 16;

  constructor(public colorService: ThemeColorService) {}
}
