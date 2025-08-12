import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MineService } from '../../services/mine.service';
import { Mine } from '../../models/mine.model';
import { PageErrorTemplateComponent } from '../../../../shared/templates/page-error-template/page-error-template.component';
import { MineDetailsTemplateComponent } from '../../../../shared/templates/mine-details-template/mine-details-template.component';

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

  constructor(private route: ActivatedRoute, protected mineSerivce: MineService) {
    
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
}
