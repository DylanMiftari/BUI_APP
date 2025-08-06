import { Injectable } from '@angular/core';
import { ThemeColor } from './theme-color-type';

@Injectable({
  providedIn: 'root'
})
export class ThemeColorService {

  constructor() { }

  public cssVarFromColor(color: ThemeColor) {
    switch(color) {
      default:
        return "--green-gradiant";
    }
  }

  public shadowColor(color: ThemeColor) {
    switch(color) {
      default:
        return "rgba(34, 197, 94, 0.3)";
    }
  }

  public simpleColor(color: ThemeColor) {
    switch(color) {
      default:
        return "#22c55e";
    }
  }
}
