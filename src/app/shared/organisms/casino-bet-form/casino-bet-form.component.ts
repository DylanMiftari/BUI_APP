import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CasinoBetFieldsComponent} from "../../moleculs/casino-bet-fields/casino-bet-fields.component";
import {ThemeColor} from "../../../core/themeColor/theme-color-type";
import {ButtonComponent} from "../../atoms/button/button.component";

@Component({
  selector: 'app-casino-bet-form',
  standalone: true,
  imports: [
    CasinoBetFieldsComponent,
    ButtonComponent
  ],
  templateUrl: './casino-bet-form.component.html',
  styleUrl: './casino-bet-form.component.css'
})
export class CasinoBetFormComponent {
  @Input() public theme: ThemeColor = "casino-regular";
  @Input() public maxBet!: number;
  @Input() public buttonLabel!: string;

  @Output() public playerPlayGame = new EventEmitter<{bet: number, other: object|null}>();
  public formGroup: FormGroup;

  constructor() {
    this.formGroup = new FormGroup({
      bet: new FormControl(0)
    });
  }

  get betFormControl() {
    return this.formGroup.get("bet") as FormControl;
  }

  clickOnPlay(): void {
    this.playerPlayGame.emit({
      bet: this.betFormControl.value,
      other: null
    });
  }
}
