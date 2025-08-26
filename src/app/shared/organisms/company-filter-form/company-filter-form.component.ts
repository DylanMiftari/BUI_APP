import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {InputComponent} from "../../atoms/input/input.component";
import {ThemeColor} from "../../../core/themeColor/theme-color-type";
import {RowComponent} from "../../atoms/row/row.component";
import {OptionList} from "../../../core/types/option-list-type";
import {ButtonComponent} from "../../atoms/button/button.component";

@Component({
  selector: 'app-company-filter-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputComponent,
    RowComponent,
    ButtonComponent
  ],
  templateUrl: './company-filter-form.component.html',
  styleUrl: './company-filter-form.component.css'
})
export class CompanyFilterFormComponent {
  @Input() color: ThemeColor = "green";
  @Output() submitFilter = new EventEmitter<{
    companyName: string|null,
    companyType: string|null,
    companyLevel: number|null,
  }>();

  companyFilterForm: FormGroup = new FormGroup({
    companyName: new FormControl(''),
    companyType: new FormControl(''),
    companyLevel: new FormControl(0),
  });
  companyTypes: OptionList = [
    {label: "All Types", value: ''},
    {label: "Bank", value: "bank"},
    {label: "Casino", value: "casino"},
    {label: "Mafia", value: "mafia"},
    {label: "Estate Agency", value: "estate"},
    {label: "Factory", value: "factory"},
    {label: "Security Company", value: "security"},
  ];
  companyLevels: OptionList = [
    {label: "All Levels", value: 0},
    {label: "Level 1", value: 1},
    {label: "Level 2", value: 2},
    {label: "Level 3", value: 3},
    {label: "Level 4", value: 4},
    {label: "Level 5", value: 5},
    {label: "Level 6", value: 6},
  ]

  get companyNameControl() {
    return this.companyFilterForm.get("companyName") as FormControl;
  }
  get companyTypeControl() {
    return this.companyFilterForm.get("companyType") as FormControl;
  }
  get companyLevelControl() {
    return this.companyFilterForm.get("companyLevel") as FormControl;
  }

  onSubmit() {
    this.submitFilter.emit({
      companyName: this.companyFilterForm.value.companyName,
      companyType: this.companyFilterForm.value.companyType,
      companyLevel: this.companyFilterForm.value.companyLevel,
    });
  }
}
