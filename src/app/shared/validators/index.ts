import { Validators } from "@angular/forms";

export * from './custom';

export const required = Validators.required;
export const minLength = Validators.minLength;
export const maxlength = Validators.maxLength;
export const emailValid = Validators.email;

