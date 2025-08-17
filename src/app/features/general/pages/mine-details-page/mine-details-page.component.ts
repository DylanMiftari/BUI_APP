import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MineService } from '../../services/mine.service';
import { Mine } from '../../models/mine.model';
import { PageErrorTemplateComponent } from '../../../../shared/templates/page-error-template/page-error-template.component';
import { MineDetailsTemplateComponent } from '../../../../shared/templates/mine-details-template/mine-details-template.component';
import { DataUserService } from '../../../../core/services/data-user.service';
import { HeaderReturnButtonService } from '../../../../core/services/header-return-button.service';

@Component({
  selector: 'app-mine-details-page',
  standalone: true,
  imports: [PageErrorTemplateComponent, MineDetailsTemplateComponent],
  templateUrl: './mine-details-page.component.html',
  styleUrl: './mine-details-page.component.css'
})
export class MineDetailsPageComponent implements OnInit {
  mineId!: number;
  mine!: Mine;
  errorMessage: string | null = null;
  collectError: string = "";
  upgradeError: string = "";

  constructor(private route: ActivatedRoute, protected mineSerivce: MineService, protected userService: DataUserService, 
    private returnButtonService: HeaderReturnButtonService
  ) {
    returnButtonService.updateButton("⛏️ Back to Mines", "/mine");
  }

  ngOnInit(): void {
    this.mineId = +this.route.snapshot.paramMap.get("id")!;
    this.mineSerivce.getMine(this.mineId).subscribe({
      next: mine => this.mine = mine,
      error: err => {
        this.errorMessage = err.error.message;
      }
    })
  }

  collectMine(): void {
    this.mineSerivce.collectMine(this.mine.id).subscribe({
      next: () => {
        window.location.reload();
      },
      error: err => {
        this.collectError = err.error.message;
      }
    });
  }

  upgradeMine(): void {
    this.mineSerivce.upgradeMine(this.mine.id).subscribe({
      next: () => {
        window.location.reload();
      },
      error: err => {
        this.upgradeError = err.error.message;
      }
    });
  }

  startMine(resourceId: number): void {
    this.mineSerivce.startMine(this.mine.id, resourceId).subscribe({
      next: () => {
        window.location.reload();
      }
    });
  }
}
