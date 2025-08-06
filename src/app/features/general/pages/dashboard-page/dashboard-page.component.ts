import { Component, OnInit } from '@angular/core';
import { User } from '../../../../core/models/user.model';
import { DataUserService } from '../../../../core/services/data-user.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css'
})
export class DashboardPageComponent {
  user!: User;

  constructor(private dataUserService: DataUserService) {
    this.user = this.dataUserService.getUser();
  }

}
