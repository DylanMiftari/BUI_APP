import { Component } from '@angular/core';
import { PageTitleComponent } from '../../atoms/page-title/page-title.component';

@Component({
  selector: 'app-dashboard-template',
  standalone: true,
  imports: [PageTitleComponent],
  templateUrl: './dashboard-template.component.html',
  styleUrl: './dashboard-template.component.css'
})
export class DashboardTemplateComponent {

}
