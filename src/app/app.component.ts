import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { DataUserService } from './core/services/data-user.service';
import { User } from './core/models/user.model';
import { HeaderReturnButtonService } from './core/services/header-return-button.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'BUI_APP';
  defaultBackground: string = "--green-gradiant";
  routeBackground: Record<string, string> = {
    "mine": "--black-gradient",
    "city": "--purple-gradient",
    "market": "--brown-gradient",
  };

  background: string = "";
  user$ = this.userService.user$;
  text$ = this.returnButtonService.text$;
  link$ = this.returnButtonService.link$;

  constructor(private router: Router, private userService: DataUserService, private returnButtonService: HeaderReturnButtonService) {

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const route = this.router.url.split('?')[0];
        const splittedRoute = route.split("/");
        this.background = this.routeBackground[splittedRoute[1]] || this.defaultBackground;
      }
    });
  }

  ngOnInit(): void {
    this.userService.fetchUser().subscribe();
  }
}
