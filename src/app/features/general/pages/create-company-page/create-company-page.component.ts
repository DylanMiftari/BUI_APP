import {Component, OnInit} from '@angular/core';
import {
  CreateCompanyTemplateComponent
} from "../../../../shared/templates/create-company-template/create-company-template.component";
import {HeaderReturnButtonService} from "../../../../core/services/header-return-button.service";
import {CompanyService} from "../../services/company.service";

@Component({
  selector: 'app-create-company-page',
  standalone: true,
  imports: [
    CreateCompanyTemplateComponent
  ],
  templateUrl: './create-company-page.component.html',
  styleUrl: './create-company-page.component.css'
})
export class CreateCompanyPageComponent {
  errorOnCreate: string = "";

  constructor(private headerButton: HeaderReturnButtonService, private companyService: CompanyService) {
    this.headerButton.updateButton("🏢 Back to company", "/company");
  }

  createCompany(data: any) {
    this.companyService.createCompany(data.companyName, data.companyType).subscribe({
      next: (res) => {
        window.location.replace("/company")
      },
      error: err => {
        this.errorOnCreate = err.error.message;
      }
    });
  }

}
