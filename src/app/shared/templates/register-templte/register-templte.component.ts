import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { RegisterFormComponent } from '../../organisms/register-form/register-form.component';

@Component({
  selector: 'app-register-templte',
  standalone: true,
  imports: [CommonModule, RegisterFormComponent],
  templateUrl: './register-templte.component.html',
  styleUrl: './register-templte.component.css'
})
export class RegisterTemplteComponent {
  @Output() sendRegisterData = new EventEmitter<{pseudo: string|undefined, password: string|undefined, confirmPassword: string|undefined}>();

  sendData(params: any) {
    this.sendRegisterData.emit(params);
  }
}
