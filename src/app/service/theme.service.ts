import { Injectable, Renderer2, RendererFactory2, Inject, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private darkMode = new BehaviorSubject<boolean>(false);
  public isDarkMode$ = this.darkMode.asObservable();
  private renderer: Renderer2;
  private isBrowser: boolean;

  constructor(
    rendererFactory: RendererFactory2,
    @Inject(PLATFORM_ID) private platformId: any // Detect if running in browser
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.isBrowser = isPlatformBrowser(platformId);
    this.initializeTheme();
  }

  private initializeTheme(): void {
    if (!this.isBrowser) return; // Prevent SSR errors

    const storedPreference = localStorage.getItem('prefersDarkMode');
    if (storedPreference !== null) {
      this.setDarkMode(JSON.parse(storedPreference));
      return;
    }

    // Check system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    this.setDarkMode(prefersDark.matches);

    // Listen for system theme changes
    prefersDark.addEventListener('change', (e) => {
      this.setDarkMode(e.matches);
    });
  }

  setDarkMode(isDark: boolean): void {
    this.darkMode.next(isDark);
    this.updateTheme(isDark);
    this.persistThemePreference(isDark);
  }

  private updateTheme(isDark: boolean): void {
    if (isDark) {
      this.renderer.addClass(document.body, 'dark-theme');
    } else {
      this.renderer.removeClass(document.body, 'dark-theme');
    }
  }

  private persistThemePreference(isDark: boolean): void {
    if (!this.isBrowser) return; // Prevent errors in SSR mode
    localStorage.setItem('prefersDarkMode', JSON.stringify(isDark));
  }

  toggleTheme(): void {
    this.setDarkMode(!this.darkMode.value);
  }
}
