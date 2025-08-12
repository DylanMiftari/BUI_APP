import { Component, Input } from '@angular/core';
import { CardComponent } from "../../organisms/card/card.component";
import { ErrorTextComponent } from "../../atoms/error-text/error-text.component";

@Component({
  selector: 'app-page-error-template',
  standalone: true,
  imports: [CardComponent, ErrorTextComponent],
  templateUrl: './page-error-template.component.html',
  styleUrl: './page-error-template.component.css'
})
export class PageErrorTemplateComponent {
  @Input() text!: string;
}
