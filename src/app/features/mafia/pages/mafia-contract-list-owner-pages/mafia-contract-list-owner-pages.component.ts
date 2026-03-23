import {Component, OnInit} from '@angular/core';
import {Mafia} from "../../models/mafia.model";
import {PageTitleComponent} from "../../../../shared/atoms/page-title/page-title.component";
import {ActivatedRoute} from "@angular/router";
import {MafiaService} from "../../services/mafia.service";
import {
  MafiaContractListOwnerTemplatesComponent
} from "../../../../shared/templates/mafia/mafia-contract-list-owner-templates/mafia-contract-list-owner-templates.component";

@Component({
  selector: 'app-mafia-contract-list-owner-pages',
  standalone: true,
  imports: [
    PageTitleComponent,
    MafiaContractListOwnerTemplatesComponent
  ],
  templateUrl: './mafia-contract-list-owner-pages.component.html',
  styleUrl: './mafia-contract-list-owner-pages.component.css'
})
export class MafiaContractListOwnerPagesComponent implements OnInit {
  mafia: Mafia | null = null;

  constructor(
    private route: ActivatedRoute,
    private mafiaService: MafiaService
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let mafiaId = params["mafia"];
      this.mafiaService.getMafiaForOwner(mafiaId).subscribe({
        next: (data) => {
          this.mafia = data;
        }
      })
    });
  }
}
