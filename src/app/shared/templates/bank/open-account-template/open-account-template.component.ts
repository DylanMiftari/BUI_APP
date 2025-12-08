import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Bank} from "../../../../features/bank/models/bank.model";
import {TitleComponent} from "../../../atoms/title/title.component";
import {PageTitleComponent} from "../../../atoms/page-title/page-title.component";
import {CardComponent} from "../../../organisms/card/card.component";
import {RowComponent} from "../../../atoms/row/row.component";
import {IconComponent} from "../../../atoms/icon/icon.component";
import {LevelPinComponent} from "../../../atoms/level-pin/level-pin.component";
import {ThemedTitleComponent} from "../../../atoms/themed-title/themed-title.component";
import {SeperatorWithTextComponent} from "../../../atoms/seperator-with-text/seperator-with-text.component";
import {CardContainerComponent} from "../../../atoms/card-container/card-container.component";
import {SimpleCardComponent} from "../../../atoms/simple-card/simple-card.component";
import {DataWithTextComponent} from "../../../moleculs/data-with-text/data-with-text.component";
import {SimpleTextComponent} from "../../../atoms/simple-text/simple-text.component";
import {ButtonComponent} from "../../../atoms/button/button.component";
import {ErrorTextComponent} from "../../../atoms/error-text/error-text.component";

@Component({
  selector: 'app-open-account-template',
  standalone: true,
  imports: [
    TitleComponent,
    PageTitleComponent,
    CardComponent,
    RowComponent,
    IconComponent,
    LevelPinComponent,
    ThemedTitleComponent,
    SeperatorWithTextComponent,
    CardContainerComponent,
    SimpleCardComponent,
    DataWithTextComponent,
    SimpleTextComponent,
    ButtonComponent,
    ErrorTextComponent
  ],
  templateUrl: './open-account-template.component.html',
  styleUrl: './open-account-template.component.css'
})
export class OpenAccountTemplateComponent {
  @Input() bank!: Bank;
  @Input() errorOnCreateAccount: string = "";
  @Output() onCreateAccount = new EventEmitter();

  clickOnCreateAccount() {
    this.onCreateAccount.emit();
  }
}
