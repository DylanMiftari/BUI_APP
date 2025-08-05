import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { RegisterFormComponent } from '../../organisms/register-form/register-form.component';
import { TitleComponent } from '../../atoms/title/title.component';
import { SimpleTextComponent } from '../../atoms/simple-text/simple-text.component';

@Component({
  selector: 'app-register-templte',
  standalone: true,
  imports: [CommonModule, RegisterFormComponent, TitleComponent, SimpleTextComponent],
  templateUrl: './register-templte.component.html',
  styleUrl: './register-templte.component.css'
})
export class RegisterTemplteComponent {
  @Output() sendRegisterData = new EventEmitter<{pseudo: string|undefined, password: string|undefined, confirmPassword: string|undefined}>();

  sendData(params: any) {
    this.sendRegisterData.emit(params);
  }
}
