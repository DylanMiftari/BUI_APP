import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-row',
  standalone: true,
  imports: [],
  templateUrl: './row.component.html',
  styleUrl: './row.component.css'
})
export class RowComponent {
  @Input() justifyContent: string = "flex-start";
  @Input() alignItems: string = "flex-start";
  @Input() gapPx: number = 0;
  @Input() wrap: boolean = false;
  @Input() marginPx: number = 0;
}
