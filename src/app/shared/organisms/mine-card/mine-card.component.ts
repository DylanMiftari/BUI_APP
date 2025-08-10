import { Component, Input, OnInit } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { RowComponent } from "../../atoms/row/row.component";
import { LevelPinComponent } from "../../atoms/level-pin/level-pin.component";
import { IconComponent } from "../../atoms/icon/icon.component";
import { SubtitleComponent } from "../../atoms/subtitle/subtitle.component";
import { StatusIndicatorComponent } from "../../moleculs/status-indicator/status-indicator.component";
import { Mine } from '../../../features/general/models/mine.model';
import { MineService } from '../../../features/general/services/mine.service';
import { SimpleTextComponent } from "../../atoms/simple-text/simple-text.component";
import { ProgressBarComponent } from "../../atoms/progress-bar/progress-bar.component";
import { DataWithTextComponent } from '../../moleculs/data-with-text/data-with-text.component';

@Component({
  selector: 'app-mine-card',
  standalone: true,
  imports: [
    CardComponent, RowComponent, LevelPinComponent, IconComponent, SubtitleComponent, StatusIndicatorComponent, 
    SimpleTextComponent, ProgressBarComponent, DataWithTextComponent, SimpleTextComponent
  ],
  templateUrl: './mine-card.component.html',
  styleUrl: './mine-card.component.css'
})
export class MineCardComponent {
  @Input() mine!: Mine;

  constructor(private mineService: MineService) {
  }

  get status(): string {
    return this.mineService.getStatus(this.mine);
  }
  get statusColor(): string {
    return this.mineService.getStatusColor(this.mine);
  }
  get leftTimeMinute(): number {
    return this.mineService.getMinuteLeft(this.mine);
  }
  get leftTimeString(): string {
    let leftMinutes = this.leftTimeMinute;
    if(leftMinutes > 0) {
      return `${Math.floor(leftMinutes / 60)}h ${leftMinutes % 60}m`;
    }
    return `0m`;
  }
}
