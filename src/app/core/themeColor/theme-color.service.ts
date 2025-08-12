import { Injectable } from '@angular/core';
import { ThemeColor } from './theme-color-type';

@Injectable({
  providedIn: 'root'
})
export class ThemeColorService {

  constructor() { }

  public cssVarFromColor(color: ThemeColor) {
    switch(color) {
      case "black": 
        return "--yellow-gradient";
      default:
        return "--green-gradiant";
    }
  }

  public shadowColor(color: ThemeColor) {
    switch(color) {
      case "black":
        return "rgba(245, 158, 11, 0.3)";
      default:
        return "rgba(34, 197, 94, 0.3)";
    }
  }

  public simpleColor(color: ThemeColor) {
    switch(color) {
      case "white": 
        return "#ffffff";
      case "black":
        return "#f59e0b";
      default:
        return "#22c55e";
    }
  }

  public glassColor(color: ThemeColor) {
    switch(color) {
      case 'black':
        return "rgba(245, 158, 11, 0.2)"
      default:
        return "rgba(34, 197, 94, 0.15)";
    }
  }
}
