import {Component, Input} from '@angular/core';
import {Home} from "../../../features/general/models/home.model";
import {PageTitleComponent} from "../../atoms/page-title/page-title.component";
import {SimpleTextComponent} from "../../atoms/simple-text/simple-text.component";
import {HomesListComponent} from "../../organisms/homes-list/homes-list.component";

@Component({
  selector: 'app-homes-list-templates',
  standalone: true,
  imports: [
    PageTitleComponent,
    SimpleTextComponent,
    HomesListComponent
  ],
  templateUrl: './homes-list-templates.component.html',
  styleUrl: './homes-list-templates.component.css'
})
export class HomesListTemplatesComponent {
  @Input() homes!: Home[];
}
