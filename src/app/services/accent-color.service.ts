import { Injectable, DOCUMENT } from '@angular/core';
import { inject } from '@angular/core';

export type AccentColor = 'green' | 'gold';

@Injectable({
  providedIn: 'root'
})
export class AccentColorService {
  private document = inject(DOCUMENT);
  private currentAccent: AccentColor = 'green';

  private readonly accentMap = {
    green: { 
      bg: 'bg-emerald-500', 
      ring: 'ring-emerald-400', 
      text: 'text-emerald-400', 
      hover: 'hover:bg-emerald-400' 
    },
    gold: { 
      bg: 'bg-amber-400', 
      ring: 'ring-amber-300', 
      text: 'text-amber-300', 
      hover: 'hover:bg-amber-300' 
    }
  };

  constructor() {
    // Apply default accent colors on initialization
    this.applyAccentColors();
  }

  setAccentColor(accent: AccentColor) {
    this.currentAccent = accent;
    this.applyAccentColors();
  }

  getCurrentAccent(): AccentColor {
    return this.currentAccent;
  }

  private applyAccentColors() {
    const accent = this.accentMap[this.currentAccent];
    
    // Apply accent background colors
    this.document.querySelectorAll('[data-accent-bg]').forEach((element: Element) => {
      const el = element as HTMLElement;
      // Remove any existing accent classes
      Object.values(this.accentMap).forEach(a => el.classList.remove(a.bg));
      // Add current accent class
      el.classList.add(accent.bg);
    });

    // Apply accent text colors
    this.document.querySelectorAll('[data-accent-text]').forEach((element: Element) => {
      const el = element as HTMLElement;
      Object.values(this.accentMap).forEach(a => el.classList.remove(a.text));
      el.classList.add(accent.text);
    });

    // Apply accent ring colors
    this.document.querySelectorAll('[data-accent-ring]').forEach((element: Element) => {
      const el = element as HTMLElement;
      Object.values(this.accentMap).forEach(a => el.classList.remove(a.ring));
      el.classList.add(accent.ring);
    });

    // Apply accent hover colors
    this.document.querySelectorAll('[data-accent-hover]').forEach((element: Element) => {
      const el = element as HTMLElement;
      Object.values(this.accentMap).forEach(a => el.classList.remove(a.hover));
      el.classList.add(accent.hover);
    });
  }

  // Method to manually trigger accent color application (useful for dynamically added elements)
  refreshAccentColors() {
    this.applyAccentColors();
  }
}