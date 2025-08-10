import { Component, Input } from '@angular/core';
import { ThemeColor } from '../../../core/themeColor/theme-color-type';
import { DataTextComponent } from '../../atoms/data-text/data-text.component';
import { SimpleTextComponent } from '../../atoms/simple-text/simple-text.component';

@Component({
  selector: 'app-data-with-text',
  standalone: true,
  imports: [DataTextComponent, SimpleTextComponent],
  templateUrl: './data-with-text.component.html',
  styleUrl: './data-with-text.component.css'
})
export class DataWithTextComponent {
  @Input() data!: any;
  @Input() unit: string = "";
  @Input() dataIsNumber: boolean = false;
  @Input() color: ThemeColor = "green";
  @Input() text!: string;
  @Input() dataTextAlign: "left" | "center" | "right" = "left";
  @Input() lightText: boolean = false;
}
