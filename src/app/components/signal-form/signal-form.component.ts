import { Component, computed, signal } from '@angular/core';
import { FormControl } from '@angular/forms';
import { futureDate, maxlength, minLength, required, startBeforeEndDate,emailValid } from '../../shared/validators';
import { SharedService } from '../../service/shared.service';

@Component({
  selector: 'app-signal-form',
  templateUrl: './signal-form.component.html',
  styleUrl: './signal-form.component.css'
})
export class SignalFormComponent {

  context: { $implicit: string, age: number} = {$implicit: 'Jack', age: 57 };
  email = signal('');
  password = signal('');
  isFormValid = computed(() => {
    return this.email().includes('@') && this.password().length >= 8
  });
  successMessage: string = '';
  price: number = 1748.03;
  sampleDate: string = '12/08/2036';
  message: string = 'this is a Message';
  signalValue = this.sharedService.sharedSignal();
  newValue = "";

  constructor(private sharedService: SharedService){}

  emailAddress = new FormControl('',[
    required, minLength(5), maxlength(50), emailValid
  ])

  updateEmail(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.email.set(inputElement.value);
  }

  updatePassword(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.password.set(inputElement.value);
  }

  onSubmit(){
    if(this.isFormValid()){
      this.successMessage = 'Login Successful';
      this.email.set('');
      this.password.set('');
    }
  }

  updateValue(){
    this.sharedService.updateValue(this.newValue);
    this.newValue = '';
  }
}
