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
      case "casino":
        return "--casino-gradient";
      case "casino-regular":
        return "--casino-regular-gradient";
      case "casino-vip":
        return "--casino-vip-gradient";
      case "bank":
        return "--bank-gradient";
      case "home":
        return "--home-gradient";
      case "mafia":
        return "--mafia-gradient";
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
      case "casino":
        return "rgba(255,0,30,0.3)";
      case "casino-regular":
        return "rgba(255, 215, 0, 0.3)";
      case "casino-vip":
        return "rgba(147, 112, 219, 0.3)";
      case "bank":
        return "rgba(30, 58, 138, 0.3)";
      case "home":
        return "rgba(0, 0, 0, 0.3)";
      case "mafia":
        return "rgba(0, 0, 0, 0.7)";
      default:
        return "rgba(34, 197, 94, 0.3)";
    }
  }

  public textShadowColor(color: ThemeColor) {
    switch(color) {
      case "black":
        return "rgba(245, 158, 11, 1)";
      case "purple":
        return "rgba(147, 51, 234, 1)";
      case "brown":
        return "rgba(139, 69, 19, 1)";
      case "blue":
        return "rgba(59, 130, 246, 1)";
      case "casino-regular":
        return "rgba(255, 215, 0, 1)";
      case "casino-vip":
        return "rgba(147, 112, 219, 1)";
      case "home":
        return "rgba(0, 0, 0, 0.3)";
      case "mafia":
        return "rgba(200, 200, 200, 0.2)";
      default:
        return "rgba(34, 197, 94, 1)";
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
      case "casino":
      case "casino-regular":
        return "#FFD700";
      case "casino-vip":
        return "#E0B0FF";
      case "bank":
        return "#1e3a8a";
      case "home":
        return "#d97706";
      case "mafia":
        return "#d0d0d0";
      default:
        return "#22c55e";
    }
  }

  public glassColor(color: ThemeColor) {
    switch(color) {
      case 'black':
        return "rgba(245, 158, 11, 0.2)";
      case "casino":
        return "rgba(0, 0, 0, 0.4)";
      case "bank":
        return "rgba(255, 255, 255, 0.1)";
      case "mafia":
        return "rgba(35, 35, 35, 0.95)";
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
      case "casino":
        return "rgba(0, 0, 0, 0.6)";
      case "casino-vip":
        return "rgba(138, 43, 226, 0.2)";
      case "casino-regular":
        return "rgba(255, 215, 0, 0.1)";
      case "green":
        return "rgba(0, 255, 0, 0.1)";
      case "bank":
        return "rgba(30, 58, 138, 0.1)";
      case "black":
        return "rgba(245, 158, 11, 0.1)";
      case "mafia":
        return "rgba(50, 50, 50, 0.5)";
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
      case "casino":
        return "#FFD700";
      case "casino-vip":
        return "#9370DB";
      case "casino-regular":
        return "#FFD700";
      case "green":
        return "#00FF00";
      case "bank":
        return "rgba(30, 58, 138, 0.2)";
      case "black":
        return "rgba(245, 158, 11, 0.3)";
      case "mafia":
        return "rgba(80, 80, 80, 0.3)";
      default:
        return "white";
    }
  }

  public onPrimaryTextColor(color: ThemeColor) {
    switch(color) {
      case "casino-regular":
        return "black";
      default:
        return "white";
    }
  }

  public inputBGColor(color: ThemeColor) {
    switch(color) {
      case "casino-regular":
      case "casino-vip":
      case "casino":
        return "black";
      default:
        return "white";
    }
  }

  public inputTextColor(color: ThemeColor) {
    switch(color) {
      case "casino-regular":
      case "casino":
        return "#FFD700"
      case "casino-vip":
        return "#9370DB";
      default:
        return "black";
    }
  }
}
