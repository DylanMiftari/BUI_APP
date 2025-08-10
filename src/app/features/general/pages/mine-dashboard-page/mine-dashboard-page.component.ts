import { Component, OnInit } from '@angular/core';
import { MineDashboardTemplateComponent } from '../../../../shared/templates/mine-dashboard-template/mine-dashboard-template.component';
import { MineService } from '../../services/mine.service';
import { Mine } from '../../models/mine.model';
import { User } from '../../../../core/models/user.model';
import { DataUserService } from '../../../../core/services/data-user.service';

@Component({
  selector: 'app-mine-dashboard-page',
  standalone: true,
  imports: [MineDashboardTemplateComponent],
  templateUrl: './mine-dashboard-page.component.html',
  styleUrl: './mine-dashboard-page.component.css'
})
export class MineDashboardPageComponent implements OnInit {
  mines: Mine[] | undefined;
  user!: User;

  constructor(private mineService: MineService, private userService: DataUserService) {}
  
  get activeMinesCount(): number {
    if(this.mines) {
      return this.mines.filter((mine) => mine.resource).length;
    }
    return 0;
  }

  get sumOfHourlyIncome(): number {
    if(this.mines) {
      return this.mines.reduce((prev, current) => prev + current.hourlyIncome!, 0)
    }
    return 0;
  }

  ngOnInit(): void {
    this.user = this.userService.getUser();
    this.mineService.getMines().subscribe({
      next: (mines) => {
        this.mines = mines;
      }
    });
  }

}
