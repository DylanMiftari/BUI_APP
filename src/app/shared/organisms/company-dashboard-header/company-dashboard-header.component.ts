import {Component, Input} from '@angular/core';
import {SimpleCardComponent} from "../../atoms/simple-card/simple-card.component";
import {ThemeColor} from "../../../core/themeColor/theme-color-type";
import {ThemedTitleComponent} from "../../atoms/themed-title/themed-title.component";
import {SimpleTextComponent} from "../../atoms/simple-text/simple-text.component";
import {RowComponent} from "../../atoms/row/row.component";
import {ButtonComponent} from "../../atoms/button/button.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-company-dashboard-header',
  standalone: true,
  imports: [
    SimpleCardComponent,
    ThemedTitleComponent,
    SimpleTextComponent,
    RowComponent,
    ButtonComponent,
    RouterLink
  ],
  templateUrl: './company-dashboard-header.component.html',
  styleUrl: './company-dashboard-header.component.css'
})
export class CompanyDashboardHeaderComponent {
  @Input() theme: ThemeColor = "casino";
  @Input() companyType!: string;
  @Input() buttonLinks: {label: string, link: string}[] = [];
}
