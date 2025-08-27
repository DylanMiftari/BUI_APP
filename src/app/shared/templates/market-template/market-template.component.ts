import {Component, Input, OnInit} from '@angular/core';
import {PageTitleComponent} from "../../atoms/page-title/page-title.component";
import {UserResource} from "../../../features/general/models/user-resource.model";
import {RowComponent} from "../../atoms/row/row.component";
import {CardComponent} from "../../organisms/card/card.component";
import {SubtitleComponent} from "../../atoms/subtitle/subtitle.component";
import {SimpleCardComponent} from "../../atoms/simple-card/simple-card.component";
import {CardContainerComponent} from "../../atoms/card-container/card-container.component";
import {resourceConfig} from "../../../core/config/resource.config";
import {Resource} from "../../../features/general/models/resource.model";
import {IconComponent} from "../../atoms/icon/icon.component";
import {DataWithTextComponent} from "../../moleculs/data-with-text/data-with-text.component";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {InputComponent} from "../../atoms/input/input.component";
import {SimpleTextComponent} from "../../atoms/simple-text/simple-text.component";

@Component({
  selector: 'app-market-template',
  standalone: true,
  imports: [
    PageTitleComponent,
    RowComponent,
    CardComponent,
    SubtitleComponent,
    SimpleCardComponent,
    CardContainerComponent,
    IconComponent,
    DataWithTextComponent,
    ReactiveFormsModule,
    InputComponent,
    SimpleTextComponent
  ],
  templateUrl: './market-template.component.html',
  styleUrl: './market-template.component.css'
})
export class MarketTemplateComponent implements OnInit {
  @Input() userResources!: UserResource[];
  resourceConfig = resourceConfig;
  resourceForm: FormGroup = new FormGroup({});

  ngOnInit() {
    for(let userResource of this.userResources) {
      this.resourceForm.addControl(userResource.resource.id.toString(), new FormControl(0));
    }
  }


  getEmojiOfResource(resource: Resource) {
    return resourceConfig["emojiResource"][resource.id];
  }

  getResourceControl(resource: Resource) {
    return this.resourceForm.controls[resource.id] as FormControl;
  }

  getCurrentSellValue(resource: Resource): number {
    return Math.round(this.resourceForm.value[resource.id] * resource.price! / 0.1 * 100) / 100
  }
}
