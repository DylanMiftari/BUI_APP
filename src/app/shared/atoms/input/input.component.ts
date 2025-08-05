import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
  host: {
    '[style.--outline-color]': 'outlineColor'
  }
})
export class InputComponent {
  @Input() name!: string;
  @Input() label!: string;
  @Input() type: "text" | "password" | "number" = "text";
  @Input() placeholder: string = "";
  @Input() control!: FormControl;
  @Input() outlineColor: string = "#22c55e";
}
