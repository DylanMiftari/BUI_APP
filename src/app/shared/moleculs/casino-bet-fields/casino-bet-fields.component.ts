import {Component, Input} from '@angular/core';
import {ThemeColor} from "../../../core/themeColor/theme-color-type";
import {SimpleCardComponent} from "../../atoms/simple-card/simple-card.component";
import {SimpleTextComponent} from "../../atoms/simple-text/simple-text.component";
import {InputComponent} from "../../atoms/input/input.component";
import {FormControl, FormGroup} from "@angular/forms";
import {ButtonComponent} from "../../atoms/button/button.component";

@Component({
  selector: 'app-casino-bet-fields',
  standalone: true,
  imports: [
    SimpleCardComponent,
    SimpleTextComponent,
    InputComponent,
    ButtonComponent
  ],
  templateUrl: './casino-bet-fields.component.html',
  styleUrl: './casino-bet-fields.component.css'
})
export class CasinoBetFieldsComponent {
  @Input() public maxBet!: number;
  @Input() public theme: ThemeColor = "casino-regular";

  public buttonBets = [10, 50, 100, 500, 1000, 5000, 10000, 50000]

  @Input() public formGroup!: FormGroup;

  get betFormControl() {
    return this.formGroup.get("bet") as FormControl;
  }

  addBet(betToAdd: number) {
    const currentBet: number = this.betFormControl.value as number;
    let newBet = +currentBet + betToAdd;
    if (this.maxBet && newBet > this.maxBet) {
      newBet = this.maxBet;
    }
    this.betFormControl.setValue(newBet);
  }
}
