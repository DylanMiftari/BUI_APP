import {Component, Input} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-roulette2-number',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './roulette2-number.component.html',
  styleUrl: './roulette2-number.component.css',
})
export class Roulette2NumberComponent {
  @Input() number: string = "0";
  @Input() rotation: number = 0;
  @Input() isSelected: boolean = false;
  public RED_NUMBERS: string[] = ['1', '3', '5', '7', '9', '12', '14', '16', '18', '19', '21', '23', '25', '27', '30', '32', '34', '36'];
  public BLACK_NUMBERS: string[] = ['2', '4', '6', '8', '10', '11', '13', '15', '17', '20', '22', '24', '26', '28', '29', '31', '33', '35'];
}
