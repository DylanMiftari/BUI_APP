import {Component, OnInit} from '@angular/core';
import {HeaderReturnButtonService} from "../../../../core/services/header-return-button.service";
import {CityService} from "../../services/city.service";
import {TravelData} from "../../models/travel-data.model";
import {
  TravelDashboardTemplatesComponent
} from "../../../../shared/templates/travel-dashboard-templates/travel-dashboard-templates.component";
import {City} from "../../models/city.model";
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {DataUserService} from "../../../../core/services/data-user.service";

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
    private router: Router,
    private userService: DataUserService,
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

  onTravel(city: City) {
    this.cityService.makeTravel(city.id).subscribe({
      next: data => {
        this.userService.fetchUser().subscribe({
          next: _ => {
            this.router.navigate(['/city/in-travel']);
          }
        });
      }
    })
  }
}
