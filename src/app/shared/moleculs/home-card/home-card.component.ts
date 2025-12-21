import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Home} from "../../../features/general/models/home.model";
import {CardComponent} from "../../organisms/card/card.component";
import {RowComponent} from "../../atoms/row/row.component";
import {HomeEmojiComponent} from "../../atoms/home-emoji/home-emoji.component";
import {LevelPinComponent} from "../../atoms/level-pin/level-pin.component";
import {SimpleTextComponent} from "../../atoms/simple-text/simple-text.component";
import {SeperatorWithTextComponent} from "../../atoms/seperator-with-text/seperator-with-text.component";

@Component({
  selector: 'app-home-card',
  standalone: true,
  imports: [
    CardComponent,
    RowComponent,
    HomeEmojiComponent,
    LevelPinComponent,
    SimpleTextComponent,
    SeperatorWithTextComponent
  ],
  templateUrl: './home-card.component.html',
  styleUrl: './home-card.component.css'
})
export class HomeCardComponent {
  @Input() home!: Home;
  @Output() clickOnHomeCard = new EventEmitter<Home>();

  onClickOnCard() {
    this.clickOnHomeCard.emit(this.home);
  }
}
