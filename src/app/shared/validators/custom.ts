import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const PHONE_NUMBER_FORMAT = /^1[3,4,5,6,7,8,9]\d{9}$/;

export function futureDate(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value;
        if (!value) {
          return null; // No value, valid case
        }
    
        const date = new Date(value);
        if (isNaN(date.getTime()) || date <= new Date()) {
          return { futureDate: true }; // Invalid case
        }
    
        return null; // Valid case
    };
}

export function phone(pattern: RegExp = PHONE_NUMBER_FORMAT): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (!value) {
        return null; // No value, valid case
      }
  
      if (!pattern.test(value)) {
        return { phone: true }; // Invalid case
      }
  
      return null; // Valid case
    };
}

export function startBeforeEndDate(startDate: string, endDate: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const startControl = control.get(startDate);
      const endControl = control.get(endDate);
  
      if (!startControl || !endControl) {
        return null; // If one of the controls is missing, consider it valid
      }
  
      const startValue = new Date(startControl.value);
      const endValue = new Date(endControl.value);
  
      if (!startControl.value || !endControl.value) {
        return null; // If either value is empty, consider it valid
      }
  
      if (isNaN(startValue.getTime()) || isNaN(endValue.getTime())) {
        return { invalidDate: true }; // Invalid date format
      }
  
      if (startValue > endValue) {
        return { startBeforeEndDate: true }; // Start date is after end date
      }
  
      return null; // Valid case
    };
}

export function codeOrOtp(pattern: RegExp = PHONE_NUMBER_FORMAT): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (!value) {
        return null; // No value, valid case
      }
  
      if (!pattern.test(value)) {
        return { phone: true }; // Invalid case
      }
  
      return null; // Valid case
    };
}