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
  @Input() pokerConfigUpdate: string = "";
  @Input() pokerConfigError: string = "";
  @Input() blackjackConfigUpdate: string = "";
  @Input() blackjackConfigError: string = "";
  @Output() onSaveConfiguration = new EventEmitter<any>();
  @Output() onSaveRouletteConfiguration = new EventEmitter<any>();
  @Output() onSaveDiceConfiguration = new EventEmitter<any>();
  @Output() onSavePokerConfiguration = new EventEmitter<any>();
  @Output() onSaveBlackjackConfiguration = new EventEmitter<any>();

  public casinoConfigFormGroup!: FormGroup;
  public rouletteConfigFormGroup!: FormGroup;
  public diceConfigFormGroup!: FormGroup;
  public pokerConfigFormGroup!: FormGroup;
  public blackjackConfigFormGroup!: FormGroup;

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
    this.pokerConfigFormGroup = new FormGroup({
      nothingMultiplicator: new FormControl(this.casinoDashboardData.config.nothingMultiplicator),
      onePairMultiplicator: new FormControl(this.casinoDashboardData.config.onePairMultiplicator),
      twoPairMultiplicator: new FormControl(this.casinoDashboardData.config.twoPairMultiplicator),
      threeOfAKindMultiplicator: new FormControl(this.casinoDashboardData.config.threeOfAKindMultiplicator),
      straightMultiplicator: new FormControl(this.casinoDashboardData.config.straightMultiplicator),
      flushMultiplicator: new FormControl(this.casinoDashboardData.config.flushMultiplicator),
      fullHouseMultiplicator: new FormControl(this.casinoDashboardData.config.fullHouseMultiplicator),
      fourOfAKindMultiplicator: new FormControl(this.casinoDashboardData.config.fourOfAKindMultiplicator),
      straightFlushMultiplicator: new FormControl(this.casinoDashboardData.config.straightFlushMultiplicator),
      royalFlushMultiplicator: new FormControl(this.casinoDashboardData.config.royalFlushMultiplicator),
      pokerMaxBet: new FormControl(this.casinoDashboardData.config.pokerMaxBet),
      nothingVIPMultiplicator: new FormControl(this.casinoDashboardData.config.nothingVIPMultiplicator),
      onePairVIPMultiplicator: new FormControl(this.casinoDashboardData.config.onePairVIPMultiplicator),
      twoPairVIPMultiplicator: new FormControl(this.casinoDashboardData.config.twoPairVIPMultiplicator),
      threeOfAKindVIPMultiplicator: new FormControl(this.casinoDashboardData.config.threeOfAKindVIPMultiplicator),
      straightVIPMultiplicator: new FormControl(this.casinoDashboardData.config.straightVIPMultiplicator),
      flushVIPMultiplicator: new FormControl(this.casinoDashboardData.config.flushVIPMultiplicator),
      fullHouseVIPMultiplicator: new FormControl(this.casinoDashboardData.config.fullHouseVIPMultiplicator),
      fourOfAKindVIPMultiplicator: new FormControl(this.casinoDashboardData.config.fourOfAKindVIPMultiplicator),
      straightFlushVIPMultiplicator: new FormControl(this.casinoDashboardData.config.straightFlushVIPMultiplicator),
      royalFlushVIPMultiplicator: new FormControl(this.casinoDashboardData.config.royalFlushVIPMultiplicator),
      pokerMaxVIPBet: new FormControl(this.casinoDashboardData.config.pokerMaxVIPBet),
    });
    this.blackjackConfigFormGroup = new FormGroup({
      blackJackWinMultiplicator: new FormControl(this.casinoDashboardData.config.blackJackWinMultiplicator),
      blackJackMultiplicator: new FormControl(this.casinoDashboardData.config.blackJackMultiplicator),
      blackJackMaxBet: new FormControl(this.casinoDashboardData.config.blackJackMaxBet),
      blackJackVIPWinMultiplicator: new FormControl(this.casinoDashboardData.config.blackJackVIPWinMultiplicator),
      blackJackVIPMultiplicator: new FormControl(this.casinoDashboardData.config.blackJackVIPMultiplicator),
      blackJackVIPMaxBet: new FormControl(this.casinoDashboardData.config.blackJackVIPMaxBet),
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

  updatePokerConfiguration() {
    this.onSavePokerConfiguration.emit({
      ...this.pokerConfigFormGroup.value,
    })
  }

  getPokerFormControl(name: string): FormControl {
    return this.pokerConfigFormGroup.get(name) as FormControl;
  }

  updateBlackjackConfiguration() {
    this.onSaveBlackjackConfiguration.emit({
      ...this.blackjackConfigFormGroup.value,
    })
  }

  getBlackjackFormControl(name: string): FormControl {
    return this.blackjackConfigFormGroup.get(name) as FormControl;
  }
}
