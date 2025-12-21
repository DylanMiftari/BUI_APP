import {Component, OnInit} from '@angular/core';
import {HeaderReturnButtonService} from "../../../../core/services/header-return-button.service";
import {CityService} from "../../services/city.service";
import {TravelData} from "../../models/travel-data.model";
import {
  TravelDashboardTemplatesComponent
} from "../../../../shared/templates/travel-dashboard-templates/travel-dashboard-templates.component";

@Component({
  selector: 'app-travel-dashboard-pages',
  standalone: true,
  imports: [
    TravelDashboardTemplatesComponent
  ],
  templateUrl: './travel-dashboard-pages.component.html',
  styleUrl: './travel-dashboard-pages.component.css'
})
export class TravelDashboardPagesComponent implements OnInit {
  travelData: TravelData | null = null;

  constructor(
    private headerButton: HeaderReturnButtonService,
    private cityService: CityService,
  ) {
    headerButton.updateButton("🏙️ Back to City", "/city");
  }

  ngOnInit() {
    this.cityService.getTravelData().subscribe({
      next: data => {
        this.travelData = data;
      }
    })
  }
}
