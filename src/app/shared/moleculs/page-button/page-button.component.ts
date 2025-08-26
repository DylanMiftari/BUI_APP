import {Component, EventEmitter, Input, Output} from '@angular/core';
import {RowComponent} from "../../atoms/row/row.component";
import {SimpleTextComponent} from "../../atoms/simple-text/simple-text.component";
import {ButtonComponent} from "../../atoms/button/button.component";
import {ThemeColor} from "../../../core/themeColor/theme-color-type";
import {SimpleCardComponent} from "../../atoms/simple-card/simple-card.component";

@Component({
  selector: 'app-page-button',
  standalone: true,
  imports: [
    RowComponent,
    SimpleTextComponent,
    ButtonComponent,
    SimpleCardComponent
  ],
  templateUrl: './page-button.component.html',
  styleUrl: './page-button.component.css'
})
export class PageButtonComponent {
  @Input() currentPage: number = 1;
  @Input() lastPage: number = 1;
  @Input() color: ThemeColor = "green";
  @Output() pageUpdated = new EventEmitter<number>();

  onClickNext() {
    this.pageUpdated.emit(this.currentPage + 1);
  }
  onClickPrev() {
    this.pageUpdated.emit(this.currentPage - 1);
  }
}
