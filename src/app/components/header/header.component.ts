import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccentColorService } from '../../services/accent-color.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="sticky top-0 z-50 bg-neutral-900/95 backdrop-blur-sm border-b border-neutral-800">
      <div class="container-lg mx-auto px-4">
        <nav class="flex items-center justify-between h-16">
          <!-- Logo -->
          <div class="flex items-center">
            <div class="text-xl font-bold text-white">VendTech Solutions</div>
          </div>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" class="text-neutral-300 hover:text-white transition-colors">How It Works</a>
            <a href="#machines" class="text-neutral-300 hover:text-white transition-colors">Machines</a>
            <a href="#calculator" class="text-neutral-300 hover:text-white transition-colors">Calculator</a>
            <a href="#contact" class="text-neutral-300 hover:text-white transition-colors">Contact</a>
            
            <!-- Accent Color Toggle -->
            <div class="flex items-center space-x-2">
              <button
                (click)="setAccentColor('green')"
                class="w-4 h-4 bg-green-500 rounded-full border-2 transition-all"
                [class.border-white]="currentAccent === 'green'"
                [class.border-neutral-600]="currentAccent !== 'green'"
                title="Green Theme">
              </button>
              <button
                (click)="setAccentColor('gold')"
                class="w-4 h-4 bg-yellow-500 rounded-full border-2 transition-all"
                [class.border-white]="currentAccent === 'gold'"
                [class.border-neutral-600]="currentAccent !== 'gold'"
                title="Gold Theme">
              </button>
            </div>

            <button class="bg-accent text-white px-6 py-2 rounded-lg font-medium hover:bg-accent/80 transition-colors">
              Get Started
            </button>
          </div>

          <!-- Mobile Menu Button -->
          <button
            (click)="toggleMobileMenu()"
            class="md:hidden p-2 text-white"
            [attr.aria-expanded]="isMobileMenuOpen">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path *ngIf="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path *ngIf="isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </nav>

        <!-- Mobile Navigation -->
        <div
          class="md:hidden overflow-hidden transition-all duration-300 ease-in-out"
          [class.max-h-0]="!isMobileMenuOpen"
          [class.max-h-96]="isMobileMenuOpen">
          <div class="py-4 space-y-4">
            <a href="#how-it-works" class="block text-neutral-300 hover:text-white transition-colors" (click)="closeMobileMenu()">How It Works</a>
            <a href="#machines" class="block text-neutral-300 hover:text-white transition-colors" (click)="closeMobileMenu()">Machines</a>
            <a href="#calculator" class="block text-neutral-300 hover:text-white transition-colors" (click)="closeMobileMenu()">Calculator</a>
            <a href="#contact" class="block text-neutral-300 hover:text-white transition-colors" (click)="closeMobileMenu()">Contact</a>
            
            <!-- Mobile Accent Color Toggle -->
            <div class="flex items-center space-x-4 pt-4">
              <span class="text-sm text-neutral-400">Theme:</span>
              <button
                (click)="setAccentColor('green')"
                class="flex items-center space-x-2 text-sm"
                [class.text-white]="currentAccent === 'green'"
                [class.text-neutral-400]="currentAccent !== 'green'">
                <div class="w-4 h-4 bg-green-500 rounded-full"></div>
                <span>Green</span>
              </button>
              <button
                (click)="setAccentColor('gold')"
                class="flex items-center space-x-2 text-sm"
                [class.text-white]="currentAccent === 'gold'"
                [class.text-neutral-400]="currentAccent !== 'gold'">
                <div class="w-4 h-4 bg-yellow-500 rounded-full"></div>
                <span>Gold</span>
              </button>
            </div>
            
            <button class="w-full bg-accent text-white px-6 py-3 rounded-lg font-medium hover:bg-accent/80 transition-colors">
              Get Started
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