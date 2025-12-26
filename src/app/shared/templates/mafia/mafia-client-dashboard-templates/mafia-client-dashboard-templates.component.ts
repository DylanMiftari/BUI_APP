import {Component, Input} from '@angular/core';
import {Mafia} from "../../../../features/mafia/models/mafia.model";
import {PageTitleComponent} from "../../../atoms/page-title/page-title.component";
import {CardComponent} from "../../../organisms/card/card.component";
import {TitleComponent} from "../../../atoms/title/title.component";
import {ThemedTitleComponent} from "../../../atoms/themed-title/themed-title.component";
import {IconComponent} from "../../../atoms/icon/icon.component";
import {LevelPinComponent} from "../../../atoms/level-pin/level-pin.component";
import {SimpleCardComponent} from "../../../atoms/simple-card/simple-card.component";
import {SimpleTextComponent} from "../../../atoms/simple-text/simple-text.component";
import {RobStatCardComponent} from "../../../organisms/mafia/rob-stat-card/rob-stat-card.component";
import {MafiaRobService} from "../../../../features/mafia/services/mafia-rob.service";
import {CardContainerComponent} from "../../../atoms/card-container/card-container.component";
import {mafiaConfig} from "../../../../core/config/mafia.config";

@Component({
  selector: 'app-mafia-client-dashboard-templates',
  standalone: true,
  imports: [
    PageTitleComponent,
    CardComponent,
    TitleComponent,
    ThemedTitleComponent,
    IconComponent,
    LevelPinComponent,
    SimpleCardComponent,
    SimpleTextComponent,
    RobStatCardComponent,
    CardContainerComponent
  ],
  templateUrl: './mafia-client-dashboard-templates.component.html',
  styleUrl: './mafia-client-dashboard-templates.component.css'
})
export class MafiaClientDashboardTemplatesComponent {
  @Input() mafia!: Mafia;

  constructor(
    public mafiaRobService: MafiaRobService
  ) {
  }

  protected readonly mafiaConfig = mafiaConfig;
}
