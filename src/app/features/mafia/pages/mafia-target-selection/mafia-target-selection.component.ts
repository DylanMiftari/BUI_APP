import {Component, OnInit} from '@angular/core';
import {HeaderReturnButtonService} from "../../../../core/services/header-return-button.service";
import {ActivatedRoute} from "@angular/router";
import {TargetResult} from "../../models/targets-result.model";
import {MafiaService} from "../../services/mafia.service";
import {PageTitleComponent} from "../../../../shared/atoms/page-title/page-title.component";
import {
  MafiaTargetSelectionTemplateComponent
} from "../../../../shared/templates/mafia/mafia-target-selection-template/mafia-target-selection-template.component";
import {Mafia} from "../../models/mafia.model";
import {forkJoin} from "rxjs";

@Component({
  selector: 'app-mafia-target-selection',
  standalone: true,
  imports: [
    PageTitleComponent,
    MafiaTargetSelectionTemplateComponent
  ],
  templateUrl: './mafia-target-selection.component.html',
  styleUrl: './mafia-target-selection.component.css'
})
export class MafiaTargetSelectionComponent implements OnInit {
  targets: TargetResult |null = null;
  mafia: Mafia | null = null;
  constructor(
    private headerButton: HeaderReturnButtonService,
    private route: ActivatedRoute,
    private mafiaService: MafiaService
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let mafiaId = params["mafia"];
      this.headerButton.updateButton("🎭 Back to Mafia", "/mafia/"+mafiaId);
      forkJoin({
        targets: this.mafiaService.getTargets(mafiaId),
        mafia: this.mafiaService.getMafia(mafiaId)
      }).subscribe({
        next: result => {
          this.mafia = result.mafia;
          this.targets = result.targets
        }
      })
    })
  }
}
