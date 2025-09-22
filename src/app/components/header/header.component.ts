import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccentColorService } from '../../services/accent-color.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="header">
      <nav class="container-lg nav">
        <div class="nav__brand">
          <div class="logo-square">CP</div>
          <span class="font-semibold">Crown Point Vending</span>
        </div>
        <div class="nav__links">
          <a href="#how">How It Works</a>
          <a href="#offer">Machines</a>
          <a href="#earn">Earnings</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Get a Quote</a>
        </div>
        <button class="mobile-menu" (click)="toggleMobileMenu()">☰</button>
        <div class="theme-switcher">
          <button
            (click)="setAccentColor('green')"
            class="theme-btn theme-btn--green"
            [class.active]="currentAccent === 'green'"
            title="Green Theme">
          </button>
          <button
            (click)="setAccentColor('gold')"
            class="theme-btn theme-btn--gold"
            [class.active]="currentAccent === 'gold'"
            title="Gold Theme">
          </button>
        </div>
        <a href="#contact" class="btn btn--sm btn--accent">Get a Quote</a>
      </nav>
      <div class="mobile-nav" [class.show]="isMobileMenuOpen">
        <div class="container-lg">
          <a href="#how" (click)="closeMobileMenu()">How It Works</a>
          <a href="#offer" (click)="closeMobileMenu()">Machines</a>
          <a href="#earn" (click)="closeMobileMenu()">Earnings</a>
          <a href="#faq" (click)="closeMobileMenu()">FAQ</a>
          <a href="#contact" (click)="closeMobileMenu()">Get a Quote</a>
          <div class="theme-switcher mt-4">
            <span class="xs text-muted">Theme:</span>
            <button
              (click)="setAccentColor('green')"
              class="theme-btn theme-btn--green"
              [class.active]="currentAccent === 'green'">
            </button>
            <button
              (click)="setAccentColor('gold')"
              class="theme-btn theme-btn--gold"
              [class.active]="currentAccent === 'gold'">
            </button>
          </div>
        </div>
      </div>
    </header>
  `
})
export class HeaderComponent {
  private accentColorService = inject(AccentColorService);
  
  isMobileMenuOpen = false;
  currentAccent: 'green' | 'gold' = 'green';

  ngOnInit() {
    // Set initial accent color
    this.accentColorService.setAccentColor('green');
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }

  setAccentColor(color: 'green' | 'gold') {
    this.currentAccent = color;
    this.accentColorService.setAccentColor(color);
  }
}