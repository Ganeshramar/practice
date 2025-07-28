import { Injectable, signal, effect } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  sharedSignal = signal<string>('Initial Value');

  constructor() {
    effect(() => {
      console.log(
        `This is new count value in service :  ${this.sharedSignal()}`,
      );
    });
  }

  updateValue(newValue: string) {
    this.sharedSignal.set(newValue);
  }
}
