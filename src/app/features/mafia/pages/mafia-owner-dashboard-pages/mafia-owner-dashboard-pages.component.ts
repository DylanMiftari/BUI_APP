import {Component, OnInit} from '@angular/core';
import {HeaderReturnButtonService} from "../../../../core/services/header-return-button.service";
import {ActivatedRoute} from "@angular/router";
import {Mafia} from "../../models/mafia.model";
import {MafiaService} from "../../services/mafia.service";
import {PageTitleComponent} from "../../../../shared/atoms/page-title/page-title.component";
import {
  MafiaOwnerDashboardTemplatesComponent
} from "../../../../shared/templates/mafia/mafia-owner-dashboard-templates/mafia-owner-dashboard-templates.component";

@Component({
  selector: 'app-mafia-owner-dashboard-pages',
  standalone: true,
  imports: [
    PageTitleComponent,
    MafiaOwnerDashboardTemplatesComponent
  ],
  templateUrl: './mafia-owner-dashboard-pages.component.html',
  styleUrl: './mafia-owner-dashboard-pages.component.css'
})
export class MafiaOwnerDashboardPagesComponent implements OnInit {
  mafia: Mafia|null = null;

  constructor(
    private headerButton: HeaderReturnButtonService,
    private route: ActivatedRoute,
    private mafiaService: MafiaService
  ) {
    headerButton.updateButton("🏢 Back to Businesses", "/company");
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let mafiaId = params["mafia"];
      this.mafiaService.getMafiaForOwnerWithLevels(mafiaId).subscribe({
        next: (data) => {
          this.mafia = data;
        }
      })
    });
  }

}
