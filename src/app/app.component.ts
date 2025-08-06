import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { DataUserService } from './core/services/data-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'BUI_APP';
  defaultBackground: string = "--green-gradiant";
  routeBackground: Record<string, string> = {
  };

  background: string = "";

  constructor(private router: Router, private userService: DataUserService) {
    
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const route = this.router.url.split('?')[0];
        const splittedRoute = route.split("/");
        this.background = this.routeBackground[splittedRoute[1]] || this.defaultBackground;
      }
    });
  }

  ngOnInit(): void {
    this.userService.fetchUser().subscribe({
      next: user => console.log("User chargé : ", user)
    });
  }
}
