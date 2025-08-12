import { Component } from '@angular/core';
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

@Component({
  selector: 'app-mine-details-template',
  standalone: true,
  imports: [CardComponent, RowComponent, IconComponent, TitleComponent, LevelPinComponent, StatusIndicatorComponent, DataWithTextComponent, SubtitleComponent, SimpleTextComponent, ProgressBarComponent, ButtonComponent, CardContainerComponent],
  templateUrl: './mine-details-template.component.html',
  styleUrl: './mine-details-template.component.css'
})
export class MineDetailsTemplateComponent {

}
