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
      case "purple":
        return "--purple-gradient";
      case "brown":
        return "--brown-gradient";
      case "blue":
        return "--blue-gradient";
      default:
        return "--green-gradiant";
    }
  }

  public shadowColor(color: ThemeColor) {
    switch(color) {
      case "black":
        return "rgba(245, 158, 11, 0.3)";
      case "purple":
        return "rgba(147, 51, 234, 0.4)";
      case "brown":
        return "rgba(139, 69, 19, 0.3)";
      case "blue":
        return "rgba(59, 130, 246, 0.4)";
      default:
        return "rgba(34, 197, 94, 0.3)";
    }
  }

  public simpleColor(color: ThemeColor) {
    switch(color) {
      case "white":
        return "#ffffff";
      case "yellow":
        return "#f59e0b";
      case "purple":
        return "#9333ea";
      case "brown":
        return "#8B4513";
      case "black":
        return "#000000";
      case "blue":
        return "#1e3a8a";
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

  public simpleCardBGColor(color: ThemeColor) {
    switch(color) {
      case "purple":
        return "rgba(147, 51, 234, 0.1)";
      case "brown":
        return "rgba(139, 69, 19, 0.1)";
      default:
        return "white";
    }
  }

  public simpleCardBorderColor(color: ThemeColor) {
    switch(color) {
      case "purple":
        return "rgba(147, 51, 234, 0.2)";
      case "brown":
        return "rgba(139, 69, 19, 0.2)";
      default:
        return "white";
    }
  }
}
