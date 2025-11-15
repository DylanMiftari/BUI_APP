import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PageTitleComponent} from "../../atoms/page-title/page-title.component";
import {CreateCompanyFormComponent} from "../../organisms/create-company-form/create-company-form.component";
import {SimpleTextComponent} from "../../atoms/simple-text/simple-text.component";
import {ErrorTextComponent} from "../../atoms/error-text/error-text.component";

@Component({
  selector: 'app-create-company-template',
  standalone: true,
  imports: [
    PageTitleComponent,
    CreateCompanyFormComponent,
    SimpleTextComponent,
    ErrorTextComponent
  ],
  templateUrl: './create-company-template.component.html',
  styleUrl: './create-company-template.component.css'
})
export class CreateCompanyTemplateComponent {
  @Input() createCompanyError: string = "";
  @Output() createCompany = new EventEmitter<{companyName:string|undefined, companyType:string|undefined}>();

  receiveCompany(params: any) {
    this.createCompany.emit(params);
  }
}
