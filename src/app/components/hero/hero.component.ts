import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="top" class="hero">
      <div class="container-lg hero__grid">
        <div>
          <p class="xs text-muted">Local • Reliable • Hassle-Free</p>
          <h1 class="h1 mt-3">Own a busy store? <span class="accent">Turn a corner into steady income.</span></h1>
          <p class="mt-4 text-soft">We install & service <strong>ATMs, claw and vending machines</strong>. No upfront cost. No maintenance. <strong>You collect your share monthly.</strong></p>
          <div class="mt-6 flex gap-3">
            <a href="#contact" class="btn btn--accent">Check eligibility</a>
            <a href="#earn" class="btn btn--outline">See Earnings Examples</a>
          </div>
          <div class="mt-6 flex items-center gap-6 small text-muted">
            <div class="flex items-center gap-2"><span class="dot"></span>No Upfront Cost</div>
            <div class="flex items-center gap-2"><span class="dot"></span>Monthly Payouts</div>
            <div class="flex items-center gap-2"><span class="dot"></span>We Handle Everything</div>
          </div>
        </div>
        <div class="hero__side">
          <div class="hero__frame">
            <!-- Hero image placeholder -->
            <div class="w-full h-full flex items-center justify-center">
              <div class="text-center">
                <div class="w-16 h-16 mx-auto mb-4 bg-accent-bg rounded-xl flex items-center justify-center">
                  <span class="text-2xl">🎰</span>
                </div>
                <p class="text-soft">Vending Machine Preview</p>
              </div>
            </div>
          </div>
          <p class="xs text-muted mt-3">Real photos of your installs will go here.</p>
        </div>
      </div>
    </section>
  `
})
export class HeroComponent {

}