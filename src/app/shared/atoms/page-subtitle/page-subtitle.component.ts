import { Component, Input } from '@angular/core';
import { SimpleTextComponent } from '../simple-text/simple-text.component';

@Component({
  selector: 'app-page-subtitle',
  standalone: true,
  imports: [SimpleTextComponent],
  templateUrl: './page-subtitle.component.html',
  styleUrl: './page-subtitle.component.css'
})
export class PageSubtitleComponent {
  @Input() text!: string;
  @Input() isLight: boolean = false;
}
