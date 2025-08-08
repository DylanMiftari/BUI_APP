import { Component, Input } from '@angular/core';
import { PageTitleComponent } from '../../atoms/page-title/page-title.component';
import { DashboardCardComponent } from '../../organisms/dashboard-card/dashboard-card.component';
import { CardContainerComponent } from '../../atoms/card-container/card-container.component';

@Component({
  selector: 'app-dashboard-template',
  standalone: true,
  imports: [
    PageTitleComponent, DashboardCardComponent, CardContainerComponent
  ],
  templateUrl: './dashboard-template.component.html',
  styleUrl: './dashboard-template.component.css'
})
export class DashboardTemplateComponent {
  @Input() companiesCount: number = 0;
  @Input() minesCount: number = 1;
}
