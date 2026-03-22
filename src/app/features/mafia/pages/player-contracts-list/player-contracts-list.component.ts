import {Component, OnInit} from '@angular/core';
import {PageTitleComponent} from "../../../../shared/atoms/page-title/page-title.component";
import {MafiaContract} from "../../models/mafia-contract.model";
import {HttpClient} from "@angular/common/http";
import {MafiaService} from "../../services/mafia.service";
import {
  PlayerContractsListTemplatesComponent
} from "../../../../shared/templates/mafia/player-contracts-list-templates/player-contracts-list-templates.component";
import {HeaderReturnButtonService} from "../../../../core/services/header-return-button.service";

@Component({
  selector: 'app-player-contracts-list',
  standalone: true,
  imports: [
    PageTitleComponent,
    PlayerContractsListTemplatesComponent
  ],
  templateUrl: './player-contracts-list.component.html',
  styleUrl: './player-contracts-list.component.css'
})
export class PlayerContractsListComponent implements OnInit {
  contracts: MafiaContract[]|null = null;

  constructor(
    private mafiaService: MafiaService,
    private headerButton: HeaderReturnButtonService
  ) {
    headerButton.updateButton("🏠 Back to Dashboard", "/");
  }

  ngOnInit() {
    this.mafiaService.getContractsOfPlayer().subscribe({
      next: data => {
        this.contracts = data;
      }
    });
  }
}
