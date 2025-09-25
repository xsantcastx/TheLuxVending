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
    // Only apply theme when document is available (guard for SSR)
    try {
      if (this.document && this.document.body) {
        this.applyTheme();
      }
    } catch {
      // noop during SSR
    }
  }

  setAccentColor(accent: AccentColor) {
    this.currentAccent = accent;
    this.applyTheme();
  }

  getCurrentAccent(): AccentColor {
    return this.currentAccent;
  }

  private applyTheme() {
    try {
      const body = this.document && this.document.body;
      if (!body) return;

      // Remove existing accent classes
      body.classList.remove('accent-green', 'accent-gold');

      // Apply current accent class
      body.classList.add(`accent-${this.currentAccent}`);
    } catch {
      // noop on server
    }
  }

  // Method to manually trigger accent color application (useful for dynamically added elements)
  refreshAccentColors() {
    this.applyTheme();
  }
}