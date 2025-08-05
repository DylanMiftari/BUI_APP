import { Component } from '@angular/core';
import { RegisterTemplteComponent } from '../../../../shared/templates/register-templte/register-templte.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  standalone: true,
  imports: [CommonModule, RegisterTemplteComponent],
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {

  test(params: any) {
    console.log(params);
  }
}
