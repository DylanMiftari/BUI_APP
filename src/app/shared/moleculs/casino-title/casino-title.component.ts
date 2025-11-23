import {Component, Input} from '@angular/core';
import {TitleComponent} from "../../atoms/title/title.component";
import {RowComponent} from "../../atoms/row/row.component";
import {IconComponent} from "../../atoms/icon/icon.component";
import {CardComponent} from "../../organisms/card/card.component";
import {ThemeColorService} from "../../../core/themeColor/theme-color.service";
import {SimpleTextComponent} from "../../atoms/simple-text/simple-text.component";

@Component({
  selector: 'app-casino-title',
  standalone: true,
  imports: [
    TitleComponent,
    RowComponent,
    IconComponent,
    CardComponent,
    SimpleTextComponent
  ],
  templateUrl: './casino-title.component.html',
  styleUrl: './casino-title.component.css'
})
export class CasinoTitleComponent {
  @Input() title!: string;
  @Input() icon!: string;
  @Input() text!: string;
  constructor(
    public themeColorService: ThemeColorService,
  ) {
  }
}
