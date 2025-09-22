import { Injectable, DOCUMENT } from '@angular/core';
import { inject } from '@angular/core';

export type AccentColor = 'green' | 'gold';

@Injectable({
  providedIn: 'root'
})
export class AccentColorService {
  private document = inject(DOCUMENT);
  private currentAccent: AccentColor = 'green';

  constructor() {
    // Apply default theme on initialization
    this.applyTheme();
  }

  setAccentColor(accent: AccentColor) {
    this.currentAccent = accent;
    this.applyTheme();
  }

  getCurrentAccent(): AccentColor {
    return this.currentAccent;
  }

  private applyTheme() {
    const body = this.document.body;
    
    // Remove existing accent classes
    body.classList.remove('accent-green', 'accent-gold');
    
    // Apply current accent class
    body.classList.add(`accent-${this.currentAccent}`);
  }

  // Method to manually trigger accent color application (useful for dynamically added elements)
  refreshAccentColors() {
    this.applyTheme();
  }
}