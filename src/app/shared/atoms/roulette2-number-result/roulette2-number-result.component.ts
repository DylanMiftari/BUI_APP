import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-roulette2-number-result',
  standalone: true,
  imports: [],
  templateUrl: './roulette2-number-result.component.html',
  styleUrl: './roulette2-number-result.component.css'
})
export class Roulette2NumberResultComponent {
  public RED_NUMBERS: string[] = ['1', '3', '5', '7', '9', '12', '14', '16', '18', '19', '21', '23', '25', '27', '30', '32', '34', '36'];
  public BLACK_NUMBERS: string[] = ['2', '4', '6', '8', '10', '11', '13', '15', '17', '20', '22', '24', '26', '28', '29', '31', '33', '35'];

  @Input() number: string = "0";

  getColorClass(number: string) {
    if(number == "0") {
      return "green";
    }
    if(this.RED_NUMBERS.indexOf(number) != -1) {
      return "red";
    }
    return "black";
  }
}
