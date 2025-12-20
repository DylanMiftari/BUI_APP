import {Component, Input} from '@angular/core';
import {UserResource} from "../../../features/general/models/user-resource.model";
import {ThemeColor} from "../../../core/themeColor/theme-color-type";
import {SimpleCardComponent} from "../../atoms/simple-card/simple-card.component";
import {IconComponent} from "../../atoms/icon/icon.component";
import {resourceConfig} from "../../../core/config/resource.config";
import {DataWithTextComponent} from "../data-with-text/data-with-text.component";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {InputComponent} from "../../atoms/input/input.component";

@Component({
  selector: 'app-resource-card',
  standalone: true,
  imports: [
    SimpleCardComponent,
    IconComponent,
    DataWithTextComponent,
    InputComponent
  ],
  templateUrl: './resource-card.component.html',
  styleUrl: './resource-card.component.css'
})
export class ResourceCardComponent {
  @Input() resource!: UserResource;
  @Input() theme: ThemeColor = "brown";
  @Input() formControl: FormControl | null = null;
  protected readonly resourceConfig = resourceConfig;
}
