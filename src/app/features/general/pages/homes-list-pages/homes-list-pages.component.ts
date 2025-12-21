import {Component, OnInit} from '@angular/core';
import {HeaderReturnButtonService} from "../../../../core/services/header-return-button.service";
import {Home} from "../../models/home.model";
import {HomeService} from "../../services/home.service";
import {
  HomesListTemplatesComponent
} from "../../../../shared/templates/homes-list-templates/homes-list-templates.component";

@Component({
  selector: 'app-homes-list-pages',
  standalone: true,
  imports: [
    HomesListTemplatesComponent
  ],
  templateUrl: './homes-list-pages.component.html',
  styleUrl: './homes-list-pages.component.css'
})
export class HomesListPagesComponent implements OnInit {
  homes: Home[] = [];

  constructor(
    private headerButton: HeaderReturnButtonService,
    private homeService: HomeService,
  ) {
    headerButton.updateButton("🏠 Back to Dashboard", "/");
  }

  ngOnInit() {
    this.homeService.getHomes().subscribe({
      next: data => {
        this.homes = data;
      }
    })
  }
}
