import {Component, Input} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {InputComponent} from "../../atoms/input/input.component";
import {OptionList} from "../../../core/types/option-list-type";
import {ThemeColor} from "../../../core/themeColor/theme-color-type";

@Component({
  selector: 'app-create-company-fields',
  standalone: true,
  imports: [
    InputComponent
  ],
  templateUrl: './create-company-fields.component.html',
  styleUrl: './create-company-fields.component.css'
})
export class CreateCompanyFieldsComponent {
  @Input({ required: true }) form!: FormGroup;
  @Input() color: ThemeColor = "green";

  companyTypes: OptionList = [
    {label: "Bank", value: "bank"},
    {label: "Casino", value: "casino"},
    {label: "Mafia", value: "mafia"},
    {label: "Estate Agency", value: "estate"},
    {label: "Factory", value: "factory"},
    {label: "Security Company", value: "security"},
  ];

  get companyNameControl(): FormControl {
    return this.form.get('companyName') as FormControl;
  }

  get companyTypeControl(): FormControl {
    return this.form.get('companyType') as FormControl;
  }
}
