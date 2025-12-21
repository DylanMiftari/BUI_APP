import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Home} from "../../../features/general/models/home.model";
import {CardContainerComponent} from "../../atoms/card-container/card-container.component";
import {HomeCardComponent} from "../../moleculs/home-card/home-card.component";

@Component({
  selector: 'app-homes-list',
  standalone: true,
  imports: [
    CardContainerComponent,
    HomeCardComponent
  ],
  templateUrl: './homes-list.component.html',
  styleUrl: './homes-list.component.css'
})
export class HomesListComponent {
  @Input() homes: Home[] = [];
  @Output() clickOnAnHome = new EventEmitter<Home>();

  onClickOnAnHomeCard(data: Home) {
    this.clickOnAnHome.emit(data);
  }
}
