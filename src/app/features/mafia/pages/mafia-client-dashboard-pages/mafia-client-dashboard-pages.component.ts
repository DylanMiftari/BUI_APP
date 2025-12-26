import {Component, OnInit} from '@angular/core';
import {Mafia} from "../../models/mafia.model";
import {HttpClient} from "@angular/common/http";
import {MafiaService} from "../../services/mafia.service";
import {ActivatedRoute} from "@angular/router";
import {
  MafiaClientDashboardTemplatesComponent
} from "../../../../shared/templates/mafia/mafia-client-dashboard-templates/mafia-client-dashboard-templates.component";
import {HeaderReturnButtonService} from "../../../../core/services/header-return-button.service";

@Component({
  selector: 'app-mafia-client-dashboard-pages',
  standalone: true,
  imports: [
    MafiaClientDashboardTemplatesComponent
  ],
  templateUrl: './mafia-client-dashboard-pages.component.html',
  styleUrl: './mafia-client-dashboard-pages.component.css'
})
export class MafiaClientDashboardPagesComponent implements OnInit {
  mafia: Mafia | null = null;

  constructor(
    private mafiaService: MafiaService,
    private route: ActivatedRoute,
    private headerButton: HeaderReturnButtonService
  ) {
    headerButton.updateButton("🏠 Back to Dashboard", "/");
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let mafiaId = params["mafia"];
      this.mafiaService.getMafia(mafiaId).subscribe({
        next: mafia => {
          this.mafia = mafia;
        }
      });
    })
  }
}
