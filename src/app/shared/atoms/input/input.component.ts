import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThemeColor } from '../../../core/themeColor/theme-color-type';
import { ThemeColorService } from '../../../core/themeColor/theme-color.service';
import {OptionList} from "../../../core/types/option-list-type";

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
  host: {
    '[style.--outline-color]': 'themeColorService.simpleColor(color)'
  }
})
export class InputComponent {
  @Input() name!: string;
  @Input() label!: string;
  @Input() type: "text" | "password" | "number" = "text";
  @Input() placeholder: string = "";
  @Input() control!: FormControl;
  @Input() color: ThemeColor = "green";
  @Input() isSelect: boolean = false;
  @Input() options: OptionList | null = null;

  constructor(public themeColorService: ThemeColorService) {}
}
