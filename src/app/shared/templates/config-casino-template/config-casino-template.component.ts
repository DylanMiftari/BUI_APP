import {Component, EventEmitter, input, Input, OnInit, Output} from '@angular/core';
import {CasinoDashboard} from "../../../features/casino/models/casino-dashboard.model";
import {
  CompanyDashboardHeaderComponent
} from "../../organisms/company-dashboard-header/company-dashboard-header.component";
import {SimpleCardComponent} from "../../atoms/simple-card/simple-card.component";
import {ThemedTitleComponent} from "../../atoms/themed-title/themed-title.component";
import {InputComponent} from "../../atoms/input/input.component";
import {SimpleTextComponent} from "../../atoms/simple-text/simple-text.component";
import {CasinoLevel} from "../../../features/casino/models/casino-level.model";
import {FormControl, FormGroup} from "@angular/forms";
import {ButtonComponent} from "../../atoms/button/button.component";
import {ErrorTextComponent} from "../../atoms/error-text/error-text.component";
import {NgIf} from "@angular/common";

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
    NgIf
  ],
  templateUrl: './config-casino-template.component.html',
  styleUrl: './config-casino-template.component.css'
})
export class ConfigCasinoTemplateComponent implements OnInit {
  @Input() casinoDashboardData!: CasinoDashboard;
  buttonLinks: {label: string, link: string}[] = [];

  @Input() configurationUpdate: string = "";
  @Input() configurationError: string = "";
  @Output() onSaveConfiguration = new EventEmitter<any>();

  public casinoConfigFormGroup!: FormGroup;

  get casinoLevel(): CasinoLevel {
    return this.casinoDashboardData.levels[this.casinoDashboardData.info.level];
  }

  ngOnInit(): void {
    this.buttonLinks = [
      {'label': 'Casino Dashboard', 'link': '/casino/'+this.casinoDashboardData.info.id+'/owner-dashboard'}
    ]

    this.casinoConfigFormGroup = new FormGroup({
      ticketPrice: new FormControl(this.casinoDashboardData.config.ticketPrice),
      VIPTicketPrice: new FormControl(this.casinoDashboardData.config.vipTicketPrice),
    });
  }

  getFormControl(name: string): FormControl {
    return this.casinoConfigFormGroup.get(name) as FormControl;
  }

  updateConfiguration() {
    this.onSaveConfiguration.emit({
      ...this.casinoConfigFormGroup.value,
    });
  }
}
