import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="how" class="section">
      <div class="container-lg">
        <div class="text-center mb-8">
          <h2 class="h2 mb-4">How It <span class="accent">Works</span></h2>
          <p class="text-soft">Simple process, proven results</p>
        </div>

        <div class="step-grid">
          <!-- Step 1 -->
          <div class="step-card">
            <div class="step-number">1</div>
            <h3 class="h3 mb-4">You provide the space</h3>
            <p class="text-soft mb-4">
              High-traffic businesses like gyms, hotels, retail stores, laundromats, and convenience stores.
            </p>
            <ul class="list">
              <li>Minimum 2x3 ft floor space</li>
              <li>Standard electrical outlet</li>
              <li>50+ daily customers preferred</li>
            </ul>
          </div>

          <!-- Step 2 -->
          <div class="step-card">
            <div class="step-number">2</div>
            <h3 class="h3 mb-4">We handle everything</h3>
            <p class="text-soft mb-4">
              Installation, stocking, maintenance, and repairs. Zero work for you.
            </p>
            <ul class="list">
              <li>Free installation & setup</li>
              <li>Regular restocking visits</li>
              <li>24/7 repair service</li>
            </ul>
          </div>

          <!-- Step 3 -->
          <div class="step-card">
            <div class="step-number">3</div>
            <h3 class="h3 mb-4">Collect your share</h3>
            <p class="text-soft mb-4">
              Receive monthly payments directly to your account. No fees or deductions.
            </p>
            <ul class="list">
              <li>Up to 25% profit share</li>
              <li>Monthly payment schedule</li>
              <li>Transparent reporting</li>
            </ul>
          </div>
        </div>

        <div class="text-center mt-8">
          <a href="#contact" class="btn btn--accent">Get Started Today</a>
        </div>
      </div>
    </section>
  `
})
export class HowItWorksComponent {

}