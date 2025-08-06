import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
  host: {
    '[style.--shadow-color]': 'shadowColor',
    '[style.--simple-color]': 'simpleColor'
  }
})
export class ButtonComponent {
  @Input() label!: string;
  @Input() color: "green" = "green";
  @Input() isOutlined: boolean = false;

  get cssVarFromColor() {
    switch(this.color) {
      default:
        return "--green-gradiant";
    }
  }

  get shadowColor() {
    switch(this.color) {
      default:
        return "rgba(34, 197, 94, 0.3)";
    }
  }

  get simpleColor() {
    switch(this.color) {
      default:
        return "#22c55e";
    }
  }
}
