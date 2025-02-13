import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  loginForm = this.fb.group({
    email: ['',[Validators.required, Validators.email]],
    password: ['',[Validators.required, Validators.minLength(8)]]
  });
  successMessage = '';
  title: string | undefined;

constructor(private fb: FormBuilder){
  this.title = 'Common title for abstract Component!!!';
}

onSubmit(){
  if(this.loginForm.valid){
    this.successMessage = 'Login Successful';
    this.loginForm.reset();
  }
}

}
