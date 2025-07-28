import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UrlService {
  constructor(private router: Router) {
    this.subscribeToUrlChanges();
  }

  subscribeToUrlChanges() {
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd,
        ),
      ) // Explicit type guard
      .subscribe((event: NavigationEnd) => {
        console.log('Current URL: ', event.url);
      });
  }
}
