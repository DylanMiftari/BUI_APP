import { Component, Input } from '@angular/core';
import { ThemeColorService } from '../../../core/themeColor/theme-color.service';
import { ThemeColor } from '../../../core/themeColor/theme-color-type';

@Component({
  selector: 'app-data-text',
  standalone: true,
  imports: [],
  templateUrl: './data-text.component.html',
  styleUrl: './data-text.component.css',
  host: {
    '[style.--simple-color]': 'this.colorService.simpleColor(this.color)'
  }
})
export class DataTextComponent {
  @Input() data!: any;
  @Input() unit: string = "";
  @Input() dataIsNumber: boolean = false;
  @Input() color: ThemeColor = "green";

  constructor(protected colorService: ThemeColorService) {}

  printData() {
    if(this.dataIsNumber) {
      let numberData = this.data as number;
      return numberData.toLocaleString();
    }
    return this.data;
  }
}
