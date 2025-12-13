import {Component, Input} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ThemeColor} from "../../../core/themeColor/theme-color-type";
import {ThemeColorService} from "../../../core/themeColor/theme-color.service";

@Component({
  selector: 'app-textarea',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.css',
  host: {
    '[style.--outline-color]': 'themeColorService.simpleColor(color)'
  }
})
export class TextareaComponent {
  @Input() name!: string;
  @Input() label!: string;
  @Input() placeholder: string = "";
  @Input() control!: FormControl;
  @Input() color: ThemeColor = "green";
  @Input() fontSizePx: number = 16;

  constructor(public themeColorService: ThemeColorService) {}
}
