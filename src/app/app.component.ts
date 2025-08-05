import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BUI_APP';
  defaultBackground: string = "--green-gradiant";
  routeBackground: Record<string, string> = {
  };

  background: string = "";

  constructor(private router: Router) {
    
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const route = this.router.url.split('?')[0];
        const splittedRoute = route.split("/");
        this.background = this.routeBackground[splittedRoute[1]] || this.defaultBackground;
      }
    });
  }
}
