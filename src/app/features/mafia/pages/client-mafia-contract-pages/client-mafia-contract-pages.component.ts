import {Component, OnInit} from '@angular/core';
import {Mafia} from "../../models/mafia.model";
import {MafiaContract} from "../../models/mafia-contract.model";
import {MafiaService} from "../../services/mafia.service";
import {HeaderReturnButtonService} from "../../../../core/services/header-return-button.service";
import {ActivatedRoute} from "@angular/router";
import {forkJoin} from "rxjs";
import {
  ClientMafiaContractTemplateComponent
} from "../../../../shared/templates/mafia/client-mafia-contract-template/client-mafia-contract-template.component";

@Component({
  selector: 'app-client-mafia-contract-pages',
  standalone: true,
  imports: [
    ClientMafiaContractTemplateComponent
  ],
  templateUrl: './client-mafia-contract-pages.component.html',
  styleUrl: './client-mafia-contract-pages.component.css'
})
export class ClientMafiaContractPagesComponent implements OnInit {
  mafia: Mafia | null = null;
  mafiaContract: MafiaContract | null = null;

  constructor(
    private mafiaService: MafiaService,
    private headerButton: HeaderReturnButtonService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let mafiaId = params["mafia"];
      forkJoin({
        mafia: this.mafiaService.getMafia(mafiaId),
        contract: this.mafiaService.getContract(mafiaId)
      }).subscribe({
        next: result => {
          this.mafiaContract = result.contract;
          this.mafia = result.mafia;
        }
      });
    });
  }
}
