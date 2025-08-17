import { Component, OnInit } from '@angular/core';
import { User } from '../../../../core/models/user.model';
import { DataUserService } from '../../../../core/services/data-user.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { DashboardTemplateComponent } from '../../../../shared/templates/dashboard-template/dashboard-template.component';
import { HeaderReturnButtonService } from '../../../../core/services/header-return-button.service';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [CommonModule, DashboardTemplateComponent],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css'
})
export class DashboardPageComponent {
  user!: User;

  constructor(private dataUserService: DataUserService, private returnButtonService: HeaderReturnButtonService) {
    this.user = this.dataUserService.getUser();
    returnButtonService.deleteButton();
  }

}
