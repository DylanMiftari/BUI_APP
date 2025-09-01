import {Component, OnInit} from '@angular/core';
import {HeaderReturnButtonService} from "../../../../core/services/header-return-button.service";
import {
  CompanyDashboardTemplateComponent
} from "../../../../shared/templates/company-dashboard-template/company-dashboard-template.component";
import {Company} from "../../models/company.model";
import {CompanyService} from "../../services/company.service";

@Component({
  selector: 'app-company-dashboard-page',
  standalone: true,
  imports: [
    CompanyDashboardTemplateComponent
  ],
  templateUrl: './company-dashboard-page.component.html',
  styleUrl: './company-dashboard-page.component.css'
})
export class CompanyDashboardPageComponent implements OnInit {
  companies: Company[] | null = null;
  upgradeError: Record<number, string> = {};

  constructor(private returnButtonService: HeaderReturnButtonService, private companyService: CompanyService) {
    returnButtonService.updateButton("🏠 Back to Dashboard", "/");
  }

  ngOnInit() {
    this.companyService.getCompaniesOfUser().subscribe({
      next: data => this.companies = data
    });
  }

  onUpgradeCompany(companyId: number) {
    this.companyService.upgradeCompany(companyId).subscribe({
      next: _ => window.location.reload(),
      error: err => this.upgradeError[companyId] = err.error.message,
    })
  }

}
