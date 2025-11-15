import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup, FormsModule} from "@angular/forms";
import {ButtonComponent} from "../../atoms/button/button.component";
import {companyConfig} from "../../../core/config/company.config";
import {CreateCompanyFieldsComponent} from "../../moleculs/create-company-fields/create-company-fields.component";
import {ThemeColor} from "../../../core/themeColor/theme-color-type";

@Component({
  selector: 'app-create-company-form',
  standalone: true,
  imports: [
    FormsModule,
    ButtonComponent,
    CreateCompanyFieldsComponent
  ],
  templateUrl: './create-company-form.component.html',
  styleUrl: './create-company-form.component.css'
})
export class CreateCompanyFormComponent {
  @Input() color: ThemeColor = "green";
  @Output() createCompany = new EventEmitter<{companyName:string|undefined, companyType:string|undefined}>();

  createCompanyForm = new FormGroup({
    companyName: new FormControl('', {nonNullable: true}),
    companyType: new FormControl('', {nonNullable: true}),
  });

  companySubmit()  {
    this.createCompany.emit({
      companyName: this.createCompanyForm.value.companyName,
      companyType: this.createCompanyForm.value.companyType
    });
  }

  protected readonly companyConfig = companyConfig;
}
