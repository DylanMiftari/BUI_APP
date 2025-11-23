import { Component } from '@angular/core';
import {HeaderReturnButtonService} from "../../../../core/services/header-return-button.service";

@Component({
  selector: 'app-casino-client-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './casino-client-dashboard.component.html',
  styleUrl: './casino-client-dashboard.component.css'
})
export class CasinoClientDashboardComponent {


  constructor(
    private headerButton: HeaderReturnButtonService,
  ) {
    headerButton.updateButton("🏠 Back to Dashboard", "/");
  }
}
