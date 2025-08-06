import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TitleComponent } from '../../atoms/title/title.component';
import { SimpleTextComponent } from '../../atoms/simple-text/simple-text.component';
import { LoginFormComponent } from '../../organisms/login-form/login-form.component';
import { SeperatorWithTextComponent } from '../../atoms/seperator-with-text/seperator-with-text.component';
import { ButtonComponent } from '../../atoms/button/button.component';

@Component({
  selector: 'app-login-template',
  standalone: true,
  imports: [TitleComponent, SimpleTextComponent, LoginFormComponent],
  templateUrl: './login-template.component.html',
  styleUrl: './login-template.component.css'
})
export class LoginTemplateComponent {
  @Input() errorMessage: string = "";
  @Output() sendLoginData = new EventEmitter<{pseudo: string, password: string}>();

  onLogin(params: any) {
    this.sendLoginData.emit({
      pseudo: params.pseudo,
      password: params.password
    });
  }
}
