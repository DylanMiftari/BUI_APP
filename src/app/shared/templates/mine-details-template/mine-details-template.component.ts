import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardComponent } from "../../organisms/card/card.component";
import { RowComponent } from "../../atoms/row/row.component";
import { IconComponent } from "../../atoms/icon/icon.component";
import { TitleComponent } from "../../atoms/title/title.component";
import { LevelPinComponent } from "../../atoms/level-pin/level-pin.component";
import { StatusIndicatorComponent } from "../../moleculs/status-indicator/status-indicator.component";
import { DataWithTextComponent } from "../../moleculs/data-with-text/data-with-text.component";
import { SubtitleComponent } from "../../atoms/subtitle/subtitle.component";
import { SimpleTextComponent } from "../../atoms/simple-text/simple-text.component";
import { ProgressBarComponent } from "../../atoms/progress-bar/progress-bar.component";
import { ButtonComponent } from "../../atoms/button/button.component";
import { CardContainerComponent } from "../../atoms/card-container/card-container.component";
import { Resource } from '../../../features/general/models/resource.model';
import { ResourceService } from '../../../features/general/services/resource.service';
import { SubtitleWithIconComponent } from "../../moleculs/subtitle-with-icon/subtitle-with-icon.component";
import { resourceConfig } from '../../../core/config/resource.config';
import { Mine } from '../../../features/general/models/mine.model';
import { MineService } from '../../../features/general/services/mine.service';
import { mineConfig } from '../../../core/config/mine.config';

@Component({
  selector: 'app-mine-details-template',
  standalone: true,
  imports: [CardComponent, RowComponent, IconComponent, TitleComponent, LevelPinComponent, StatusIndicatorComponent, DataWithTextComponent, SubtitleComponent, SimpleTextComponent, ProgressBarComponent, ButtonComponent, CardContainerComponent, SubtitleWithIconComponent],
  templateUrl: './mine-details-template.component.html',
  styleUrl: './mine-details-template.component.css'
})
export class MineDetailsTemplateComponent implements OnInit {
  @Input() mine!: Mine;
  resources: Resource[] | null = null;
  mineConfig = mineConfig;

  @Output() collectResources = new EventEmitter<void>();
  @Output() upgradeMine = new EventEmitter<void>();
  @Output() startMining = new EventEmitter<number>();

  constructor(private resourceService: ResourceService, public mineService: MineService) {}

  ngOnInit(): void {
    this.resourceService.getResourcesForMineLevel(this.mine.level).subscribe({
      next: resources => this.resources = resources
    });
  }

  emojiResource(resourceId: number) {
    return resourceConfig["emojiResource"][resourceId];
  }

  getLeftTimeText() {
    let leftMinutes = this.mineService.getMinuteLeft(this.mine);
    if(leftMinutes <= 0) {
      return "0m";
    }
    return `${Math.floor(leftMinutes/60)}h ${leftMinutes%60}m`;
  }

  sendCollectResource() {
    this.collectResources.emit();
  }
  sendUpgradeMine() {
    this.upgradeMine.emit();
  }
  sendStartMining(resourceId: number) {
    this.startMining.emit(resourceId);
  }
}
