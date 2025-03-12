import { Component, computed, signal, effect } from '@angular/core';
import { SharedService } from '../service/shared.service';
import { UrlService } from '../service/url.service';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css'
})
export class SignalsComponent {
  count = signal(0);
  constructor( public sharedService: SharedService, private urlService: UrlService){
    effect(() => {
      console.log(`This is new count value:  ${this.count()}`);
    });
    
    effect(() => {
      console.log(`This is new count value:  ${this.count()}`);
      console.log(`This is service value:  ${this.sharedService.sharedSignal()}`);
    });
  }

  increment(){
    this.count.set(this.count() + 1);
  }

  doubleCount = computed(() => this.count() * 2);

}
