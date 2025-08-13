import { Component, Input } from '@angular/core';
import { IconComponent } from '../../atoms/icon/icon.component';
import { SubtitleComponent } from '../../atoms/subtitle/subtitle.component';
import { ThemeColor } from '../../../core/themeColor/theme-color-type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-subtitle-with-icon',
  standalone: true,
  imports: [IconComponent, SubtitleComponent, CommonModule],
  templateUrl: './subtitle-with-icon.component.html',
  styleUrl: './subtitle-with-icon.component.css'
})
export class SubtitleWithIconComponent {
  @Input() icon!: string;
  @Input() fontSizeIcon: number = 2;
  @Input() subtitle!: string;
  @Input() color: string = "black";
  @Input() inRow: boolean = false; 
}
