import { Component } from '@angular/core';
import {UserService} from "../../services/user.service";
import {DataUserService} from "../../../../core/services/data-user.service";
import {User} from "../../../../core/models/user.model";
import {PageTitleComponent} from "../../../../shared/atoms/page-title/page-title.component";
import {SimpleTextComponent} from "../../../../shared/atoms/simple-text/simple-text.component";
import {CardComponent} from "../../../../shared/organisms/card/card.component";
import {DataWithTextComponent} from "../../../../shared/moleculs/data-with-text/data-with-text.component";
import {DatePipe} from "@angular/common";
import {HeaderReturnButtonService} from "../../../../core/services/header-return-button.service";

@Component({
  selector: 'app-in-travel-pages',
  standalone: true,
  imports: [
    PageTitleComponent,
    SimpleTextComponent,
    CardComponent,
    DataWithTextComponent,
    DatePipe
  ],
  templateUrl: './in-travel-pages.component.html',
  styleUrl: './in-travel-pages.component.css'
})
export class InTravelPagesComponent {
  user: User | null = null;

  constructor(
    private userService: DataUserService,
    private headerButton: HeaderReturnButtonService
  ) {
    this.user = userService.getUser();
    headerButton.updateButton("🏠 Back to Dashboard", "/");
  }
}
