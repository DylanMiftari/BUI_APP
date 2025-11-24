import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CasinoGame} from "../../../core/types/casino-game.type";
import {SimpleCardComponent} from "../../atoms/simple-card/simple-card.component";
import {IconComponent} from "../../atoms/icon/icon.component";
import {SimpleTextComponent} from "../../atoms/simple-text/simple-text.component";
import {ThemeColor} from "../../../core/themeColor/theme-color-type";
import {CardComponent} from "../../organisms/card/card.component";
import {DataWithTextComponent} from "../data-with-text/data-with-text.component";
import {ButtonComponent} from "../../atoms/button/button.component";

@Component({
  selector: 'app-casino-game-card',
  standalone: true,
  imports: [
    SimpleCardComponent,
    IconComponent,
    SimpleTextComponent,
    CardComponent,
    DataWithTextComponent,
    ButtonComponent
  ],
  templateUrl: './casino-game-card.component.html',
  styleUrl: './casino-game-card.component.css'
})
export class CasinoGameCardComponent {
  @Input() game!: CasinoGame;
  @Input() theme: ThemeColor = "casino";
  @Input() maxBet: number | null = null;

  @Output() playGameEmitter = new EventEmitter<string>();

  private gameToEmoji = {
    "roulette": "🎰",
    "dice": "🎲",
    "poker": "🃏",
    "blackjack": "♦️",
    "roulette2": "🎯"
  }
  private gameToName = {
    "roulette": "Roulette",
    "dice": "Dice Roll",
    "poker": "Poker",
    "blackjack": "Blackjack",
    "roulette2": "Classic Roulette"
  }

  get emoji() {
    return this.gameToEmoji[this.game];
  }
  get name() {
    return this.gameToName[this.game];
  }

  playGame() {
    this.playGameEmitter.emit(this.game);
  }
}
