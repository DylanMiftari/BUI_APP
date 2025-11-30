import { Component, EventEmitter, input, Input, OnInit, Output } from '@angular/core';
import { CasinoDashboard } from "../../../features/casino/models/casino-dashboard.model";
import {
  CompanyDashboardHeaderComponent
} from "../../organisms/company-dashboard-header/company-dashboard-header.component";
import { SimpleCardComponent } from "../../atoms/simple-card/simple-card.component";
import { ThemedTitleComponent } from "../../atoms/themed-title/themed-title.component";
import { InputComponent } from "../../atoms/input/input.component";
import { SimpleTextComponent } from "../../atoms/simple-text/simple-text.component";
import { CasinoLevel } from "../../../features/casino/models/casino-level.model";
import { FormControl, FormGroup } from "@angular/forms";
import { ButtonComponent } from "../../atoms/button/button.component";
import { ErrorTextComponent } from "../../atoms/error-text/error-text.component";
import { NgIf } from "@angular/common";
import { SeperatorWithTextComponent } from "../../atoms/seperator-with-text/seperator-with-text.component";

@Component({
  selector: 'app-config-casino-template',
  standalone: true,
  imports: [
    CompanyDashboardHeaderComponent,
    SimpleCardComponent,
    ThemedTitleComponent,
    InputComponent,
    SimpleTextComponent,
    ButtonComponent,
    ErrorTextComponent,
    NgIf,
    SeperatorWithTextComponent
  ],
  templateUrl: './config-casino-template.component.html',
  styleUrl: './config-casino-template.component.css'
})
export class ConfigCasinoTemplateComponent implements OnInit {
  @Input() casinoDashboardData!: CasinoDashboard;
  buttonLinks: { label: string, link: string }[] = [];

  @Input() configurationUpdate: string = "";
  @Input() configurationError: string = "";
  @Input() rouletteConfigUpdate: string = "";
  @Input() rouletteConfigError: string = "";
  @Input() diceConfigUpdate: string = "";
  @Input() diceConfigError: string = "";
  @Output() onSaveConfiguration = new EventEmitter<any>();
  @Output() onSaveRouletteConfiguration = new EventEmitter<any>();
  @Output() onSaveDiceConfiguration = new EventEmitter<any>();

  public casinoConfigFormGroup!: FormGroup;
  public rouletteConfigFormGroup!: FormGroup;
  public diceConfigFormGroup!: FormGroup;

  get casinoLevel(): CasinoLevel {
    return this.casinoDashboardData.levels[this.casinoDashboardData.info.level - 1];
  }

  ngOnInit(): void {
    this.buttonLinks = [
      { 'label': 'Casino Dashboard', 'link': '/casino/' + this.casinoDashboardData.info.id + '/owner-dashboard' }
    ]

    this.casinoConfigFormGroup = new FormGroup({
      ticketPrice: new FormControl(this.casinoDashboardData.config.ticketPrice),
      VIPTicketPrice: new FormControl(this.casinoDashboardData.config.vipTicketPrice),
    });
    this.rouletteConfigFormGroup = new FormGroup({
      rouletteSequenceMultiplicator: new FormControl(this.casinoDashboardData.config.rouletteSequenceMultiplicator),
      rouletteTripletMultiplcator: new FormControl(this.casinoDashboardData.config.rouletteTripletMultiplcator),
      rouletteTripleSeventMultiplicator: new FormControl(this.casinoDashboardData.config.rouletteTripleSeventMultiplicator),
      rouletteMaxBet: new FormControl(this.casinoDashboardData.config.rouletteMaxBet),
      rouletteVIPSequenceMultiplicator: new FormControl(this.casinoDashboardData.config.rouletteVIPSequenceMultiplicator),
      rouletteVIPTripletMultiplcator: new FormControl(this.casinoDashboardData.config.rouletteVIPTripletMultiplcator),
      rouletteVIPTripleSeventMultiplicator: new FormControl(this.casinoDashboardData.config.rouletteVIPTripleSeventMultiplicator),
      rouletteMaxVIPBet: new FormControl(this.casinoDashboardData.config.rouletteMaxVIPBet),
    });
    this.diceConfigFormGroup = new FormGroup({
      diceGoal: new FormControl(this.casinoDashboardData.config.diceGoal),
      diceWinMultiplicator: new FormControl(this.casinoDashboardData.config.diceWinMultiplicator),
      diceMaxBet: new FormControl(this.casinoDashboardData.config.diceMaxBet),
      diceVIPGoal: new FormControl(this.casinoDashboardData.config.diceVIPGoal),
      diceVIPWinMultiplicator: new FormControl(this.casinoDashboardData.config.diceVIPWinMultiplicator),
      diceVIPMaxBet: new FormControl(this.casinoDashboardData.config.diceVIPMaxBet),
    });
  }

  getFormControl(name: string): FormControl {
    return this.casinoConfigFormGroup.get(name) as FormControl;
  }
  getRouletteFormControl(name: string): FormControl {
    return this.rouletteConfigFormGroup.get(name) as FormControl;
  }

  updateConfiguration() {
    this.onSaveConfiguration.emit({
      ...this.casinoConfigFormGroup.value,
    });
  }
  updateRouletteConfiguration() {
    this.onSaveRouletteConfiguration.emit({
      ...this.rouletteConfigFormGroup.value,
    })
  }
  updateDiceConfiguration() {
    this.onSaveDiceConfiguration.emit({
      ...this.diceConfigFormGroup.value,
    })
  }

  getDiceFormControl(name: string): FormControl {
    return this.diceConfigFormGroup.get(name) as FormControl;
  }
}
