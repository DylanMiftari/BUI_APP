import {Component, Input} from '@angular/core';
import {UserResource} from "../../../features/general/models/user-resource.model";
import {ResourceCardComponent} from "../../moleculs/resource-card/resource-card.component";
import {CardContainerComponent} from "../../atoms/card-container/card-container.component";
import {FormControl, FormGroup} from "@angular/forms";
import {ThemeColor} from "../../../core/themeColor/theme-color-type";

@Component({
  selector: 'app-resource-list',
  standalone: true,
  imports: [
    ResourceCardComponent,
    CardContainerComponent
  ],
  templateUrl: './resource-list.component.html',
  styleUrl: './resource-list.component.css'
})
export class ResourceListComponent {
  @Input() resources: UserResource[] = [];
  @Input() formGroup: FormGroup | null = null;
  @Input() theme: ThemeColor = "bank";

  getFormControl(resourceId: number) {
    if (this.formGroup) {
      return this.formGroup.get(resourceId.toString()) as FormControl;
    }
    return null;
  }
}
