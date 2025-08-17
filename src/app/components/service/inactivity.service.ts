import { Injectable, NgZone } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InactivityService {
  private inactivityTimer:any;
  private timeOut = 2 * 60 * 1000;

  constructor(private ngZone: NgZone) { }

  startWatching() {
    this.resetTimer();
    // listen to user activity
    window.addEventListener('mousemove', () => this.resetTimer());
    window.addEventListener('keypress', () => this.resetTimer());
    window.addEventListener('click', () => this.resetTimer());
    window.addEventListener('scroll', () => this.resetTimer());
  }

  private resetTimer() {
    clearTimeout(this.inactivityTimer);
    this.ngZone.runOutsideAngular(() => {
      this.inactivityTimer = setTimeout(() => {
        this.ngZone.run(() => {
          alert('You have been inactive for 2 minutes!');
        });
      }, this.timeOut);
    });
  }
}
