import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardComponent } from "../../organisms/card/card.component";
import { SimpleTextComponent } from '../../atoms/simple-text/simple-text.component';
import { SubtitleWithIconComponent } from '../../moleculs/subtitle-with-icon/subtitle-with-icon.component';
import { SeperatorWithTextComponent } from '../../atoms/seperator-with-text/seperator-with-text.component';
import { DataWithTextComponent } from '../../moleculs/data-with-text/data-with-text.component';
import { RowComponent } from '../../atoms/row/row.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-card',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent, SubtitleWithIconComponent,
    SimpleTextComponent, SeperatorWithTextComponent, DataWithTextComponent, RowComponent
  ],
  templateUrl: './dashboard-card.component.html',
  styleUrl: './dashboard-card.component.css'
})
export class DashboardCardComponent {
  @Input() icon!: string;
  @Input() cardTitle!: string;
  @Input() text!: string;
  @Input() datas!: {data: any, dataIsNumber: boolean, unit: string, text: string}[];
  @Output() clicked = new EventEmitter<void>();

  clickOnCard() {
    this.clicked.emit();
  }
}
