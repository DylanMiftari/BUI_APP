import { Component, OnInit } from '@angular/core';
import { HeaderReturnButtonService } from '../../../../core/services/header-return-button.service';
import { CityDashboardTemplateComponent } from "../../../../shared/templates/city-dashboard-template/city-dashboard-template.component";
import { CityService } from '../../services/city.service';
import { City } from '../../models/city.model';
import {Company} from "../../models/company.model";
import {PaginateData} from "../../../../core/models/paginate-data.model";

@Component({
  selector: 'app-city-dashboard-page',
  standalone: true,
  imports: [CityDashboardTemplateComponent],
  templateUrl: './city-dashboard-page.component.html',
  styleUrl: './city-dashboard-page.component.css'
})
export class CityDashboardPageComponent implements OnInit {
  city: City | null = null;
  companies: PaginateData<Company> | null = null;
  filterData = {
    companyName: null,
    companyLevel: null,
    companyType: null,
  }
  currentPage = 1;

  constructor(private returnButtonService: HeaderReturnButtonService, private cityService: CityService) {
    returnButtonService.updateButton("🏠 Back to Dashboard", "/");
  }

  ngOnInit(): void {
    this.cityService.getCityOfUser().subscribe({
      next: city => this.city = city
    });

    this.cityService.getCompaniesOfCityOfUser().subscribe({
      next: data => {
        this.companies = data
      }
    });
  }

  onReceiveCompanyFilter(data: any) {
    this.filterData = data;
    this.cityService.getCompaniesOfCityOfUser(data.companyName, data.companyLevel, data.companyType, this.currentPage).subscribe({
      next: data => {
        this.companies = data
      }
    });
  }

  onReceiveCompanyPage(data: number) {
    this.currentPage = data
    this.cityService.getCompaniesOfCityOfUser(this.filterData.companyName, this.filterData.companyLevel, this.filterData.companyType, data).subscribe({
      next: data => {
        this.companies = data
      }
    });
  }

}
