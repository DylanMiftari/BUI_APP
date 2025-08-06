import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-text',
  standalone: true,
  imports: [],
  templateUrl: './error-text.component.html',
  styleUrl: './error-text.component.css'
})
export class ErrorTextComponent {
  @Input() text!: string;
}
