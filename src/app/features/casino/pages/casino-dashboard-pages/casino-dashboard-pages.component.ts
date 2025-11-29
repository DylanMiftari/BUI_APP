import {Component, OnInit} from '@angular/core';
import {CasinoDashboard} from "../../models/casino-dashboard.model";
import {HttpClient} from "@angular/common/http";
import {HeaderReturnButtonService} from "../../../../core/services/header-return-button.service";
import {CasinoOwnerService} from "../../services/casino-owner.service";
import {ActivatedRoute} from "@angular/router";
import {
  CasinoDashboardTemplateComponent
} from "../../../../shared/templates/casino-dashboard-template/casino-dashboard-template.component";

@Component({
  selector: 'app-casino-dashboard-pages',
  standalone: true,
  imports: [
    CasinoDashboardTemplateComponent
  ],
  templateUrl: './casino-dashboard-pages.component.html',
  styleUrl: './casino-dashboard-pages.component.css'
})
export class CasinoDashboardPagesComponent implements OnInit {
  public casinoDashboardData: CasinoDashboard | undefined = undefined;

  constructor(
    private headerButton: HeaderReturnButtonService,
    private casinoService: CasinoOwnerService,
    private route: ActivatedRoute,
  ) {
    headerButton.updateButton("🏢 Back to Businesses", "/company")
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let casinoId = params['casinoId'];
      this.casinoService.getDashboardData(casinoId).subscribe({
        next: data => {
          this.casinoDashboardData = data;
        }
      })
    })
  }
}
