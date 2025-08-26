import { Component, OnInit } from '@angular/core';
import { HeaderReturnButtonService } from '../../../../core/services/header-return-button.service';
import { CityDashboardTemplateComponent } from "../../../../shared/templates/city-dashboard-template/city-dashboard-template.component";
import { CityService } from '../../services/city.service';
import { City } from '../../models/city.model';
import {Company} from "../../models/company.model";

@Component({
  selector: 'app-city-dashboard-page',
  standalone: true,
  imports: [CityDashboardTemplateComponent],
  templateUrl: './city-dashboard-page.component.html',
  styleUrl: './city-dashboard-page.component.css'
})
export class CityDashboardPageComponent implements OnInit {
  city: City | null = null;
  companies: Company[] = [];

  constructor(private returnButtonService: HeaderReturnButtonService, private cityService: CityService) {
    returnButtonService.updateButton("🏠 Back to Dashboard", "/");
  }

  ngOnInit(): void {
    this.cityService.getCityOfUser().subscribe({
      next: city => this.city = city
    });

    this.cityService.getCompaniesOfCityOfUser().subscribe({
      next: data => {
        this.companies = data.data
      }
    });
  }

  onReceiveCompanyFilter(data: any) {
    this.cityService.getCompaniesOfCityOfUser(data.companyName, data.companyLevel, data.companyType).subscribe({
      next: data => {
        this.companies = data.data
      }
    });
  }

}
