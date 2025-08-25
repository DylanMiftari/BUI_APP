import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-subtitle',
  standalone: true,
  imports: [],
  templateUrl: './subtitle.component.html',
  styleUrl: './subtitle.component.css'
})
export class SubtitleComponent {
  @Input() text!: string;
  @Input() color: string = "black";
  @Input() fontSizePx: number = 24;
}
