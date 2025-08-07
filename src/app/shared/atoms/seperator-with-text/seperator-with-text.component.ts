import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-seperator-with-text',
  standalone: true,
  imports: [],
  templateUrl: './seperator-with-text.component.html',
  styleUrl: './seperator-with-text.component.css'
})
export class SeperatorWithTextComponent {
  @Input() marginPx: number = 0;
}
