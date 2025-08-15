import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PageTitleComponent } from '../../atoms/page-title/page-title.component';
import { PageSubtitleComponent } from '../../atoms/page-subtitle/page-subtitle.component';
import { RowComponent } from '../../atoms/row/row.component';
import { CardComponent } from '../../organisms/card/card.component';
import { IconComponent } from '../../atoms/icon/icon.component';
import { DataWithTextComponent } from '../../moleculs/data-with-text/data-with-text.component';
import { CardContainerComponent } from "../../atoms/card-container/card-container.component";
import { MineCardComponent } from "../../organisms/mine-card/mine-card.component";
import { Mine } from '../../../features/general/models/mine.model';
import { Router } from '@angular/router';
import { mineConfig } from '../../../core/config/mine.config';
import { SubtitleComponent } from "../../atoms/subtitle/subtitle.component";
import { SimpleTextComponent } from "../../atoms/simple-text/simple-text.component";
import { ErrorTextComponent } from "../../atoms/error-text/error-text.component";

@Component({
  selector: 'app-mine-dashboard-template',
  standalone: true,
  imports: [
    PageTitleComponent, PageSubtitleComponent, RowComponent, CardComponent, IconComponent, DataWithTextComponent,
    CardContainerComponent,
    MineCardComponent,
    SubtitleComponent,
    SimpleTextComponent,
    ErrorTextComponent
],
  templateUrl: './mine-dashboard-template.component.html',
  styleUrl: './mine-dashboard-template.component.css'
})
export class MineDashboardTemplateComponent {
  @Input() totalMines: number = 0;
  @Input() activeMines: number = 0;
  @Input() resourceSum: number = 0;
  @Input() totalHourlyIncome: number = 0;
  @Input() mines!: Mine[];
  @Input() buyError: string = "";

  @Output() buyMine = new EventEmitter<void>();

  mineConfig = mineConfig;

  constructor(private route: Router) {}

  navigateToMine(mineId: number) {
    this.route.navigate(["/mine", mineId])
  }

  buyNewMine() {
    this.buyMine.emit();
  }
}
