import {Component, OnInit} from '@angular/core';
import {MarketTemplateComponent} from "../../../../shared/templates/market-template/market-template.component";
import {HeaderReturnButtonService} from "../../../../core/services/header-return-button.service";
import {UserResource} from "../../models/user-resource.model";
import {ResourceService} from "../../services/resource.service";

@Component({
  selector: 'app-market-page',
  standalone: true,
  imports: [
    MarketTemplateComponent
  ],
  templateUrl: './market-page.component.html',
  styleUrl: './market-page.component.css'
})
export class MarketPageComponent implements OnInit {
  userResources: UserResource[] | null = null;

  constructor(private returnButtonService: HeaderReturnButtonService, private resourceService: ResourceService) {
    returnButtonService.updateButton("🏠 Back to Dashboard", "/");
  }

  ngOnInit() {
    this.resourceService.getUserResources().subscribe({
      next: resource => this.userResources = resource,
    });
  }

}
