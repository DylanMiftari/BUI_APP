import {Component, Input} from '@angular/core';
import {Home} from "../../../features/general/models/home.model";
import {IconComponent} from "../icon/icon.component";
import {homeConfig} from "../../../core/config/home.config";

@Component({
  selector: 'app-home-emoji',
  standalone: true,
  imports: [
    IconComponent
  ],
  templateUrl: './home-emoji.component.html',
  styleUrl: './home-emoji.component.css'
})
export class HomeEmojiComponent {
  @Input() home!: Home;
  @Input() fontSize: number = 2;
  protected readonly homeConfig = homeConfig;
}
