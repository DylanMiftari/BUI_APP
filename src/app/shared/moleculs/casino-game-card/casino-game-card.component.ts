import {Component, Input} from '@angular/core';
import {CasinoGame} from "../../../core/types/casino-game.type";
import {SimpleCardComponent} from "../../atoms/simple-card/simple-card.component";
import {IconComponent} from "../../atoms/icon/icon.component";
import {SimpleTextComponent} from "../../atoms/simple-text/simple-text.component";

@Component({
  selector: 'app-casino-game-card',
  standalone: true,
  imports: [
    SimpleCardComponent,
    IconComponent,
    SimpleTextComponent
  ],
  templateUrl: './casino-game-card.component.html',
  styleUrl: './casino-game-card.component.css'
})
export class CasinoGameCardComponent {
  @Input() game!: CasinoGame;

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
}
