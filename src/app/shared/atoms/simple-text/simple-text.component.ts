import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

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
}
