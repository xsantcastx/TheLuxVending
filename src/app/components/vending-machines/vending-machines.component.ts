import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vending-machines',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="offer" class="section">
      <div class="container-lg">
        <div class="text-center mb-8">
          <h2 class="h2 mb-4">Machine <span class="accent">Options</span></h2>
          <p class="text-soft">Choose from our proven revenue generators</p>
        </div>

        <div class="equip-grid">
          <!-- ATM Machine -->
          <article class="equip-card">
            <div class="equip-card__media img-frame ar-4x3 equip--tall">
              <img
                src="assets/1.png"
                alt="ATM — $3.50 convenience fee"
                class="img--contain img-fade"
                loading="lazy"
                decoding="async"
                onload="this.classList.add('is-loaded')"
              />
              <div class="img-caption">ATM • $3.50 per transaction</div>
            </div>
            <div class="equip-card__body">
              <h3 class="equip-title">ATM Machine</h3>
              <p class="equip-meta">High-traffic cash access point for your customers.</p>
              
              <!-- Service Areas -->
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="chip">Hotels</span>
                <span class="chip">Convenience Stores</span>
                <span class="chip">Bars & Clubs</span>
              </div>
              
              <div class="space-y-2 text-soft small">
                <div>• No upfront investment</div>
                <div>• Monthly revenue share</div>
                <div>• 24/7 remote monitoring</div>
                <div>• Full maintenance included</div>
              </div>
              
              <div class="mt-6 pt-4 border-t border-neutral-800">
                <div class="text-center">
                  <div class="h3 accent">$200-500</div>
                  <div class="small text-muted">monthly revenue</div>
                </div>
              </div>
            </div>
          </article>

          <!-- Claw Machine -->
          <article class="equip-card">
            <div class="equip-card__media img-frame ar-4x3 equip--tall">
              <img
                src="assets/2.png"
                alt="Claw Machine — $2 per play"
                class="img--contain img-fade"
                loading="lazy"
                decoding="async"
                onload="this.classList.add('is-loaded')"
              />
              <div class="img-caption">Claw Machine • $2 per play</div>
            </div>
            <div class="equip-card__body">
              <h3 class="equip-title">Claw Machine</h3>
              <p class="equip-meta">Popular entertainment machine that draws repeat customers.</p>
              
              <!-- Service Areas -->
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="chip">Restaurants</span>
                <span class="chip">Arcades</span>
                <span class="chip">Malls</span>
              </div>
              
              <div class="space-y-2 text-soft small">
                <div>• Premium plush prizes</div>
                <div>• LED lighting system</div>
                <div>• Adjustable difficulty</div>
                <div>• Prize restocking service</div>
              </div>
              
              <div class="mt-6 pt-4 border-t border-neutral-800">
                <div class="text-center">
                  <div class="h3 accent">$150-350</div>
                  <div class="small text-muted">monthly revenue</div>
                </div>
              </div>
            </div>
          </article>

          <!-- Vending Machine -->
          <article class="equip-card">
            <div class="equip-card__media img-frame ar-4x3">
              <img
                src="assets/3.png"
                alt="Vending Machine — snacks & drinks"
                class="img--contain img-fade"
                loading="lazy"
                decoding="async"
                onload="this.classList.add('is-loaded')"
              />
              <div class="img-caption">Vending Machine • Snacks & drinks</div>
            </div>
            <div class="equip-card__body">
              <h3 class="equip-title">Vending Machine</h3>
              <p class="equip-meta">Snacks and drinks machine perfect for any location.</p>
              
              <!-- Service Areas -->
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="chip">Retail Stores</span>
                <span class="chip">Gyms</span>
                <span class="chip">Schools</span>
              </div>
              
              <div class="space-y-2 text-soft small">
                <div>• 40+ product selections</div>
                <div>• Cashless payment system</div>
                <div>• Climate-controlled</div>
                <div>• Automatic inventory alerts</div>
              </div>
              
              <div class="mt-6 pt-4 border-t border-neutral-800">
                <div class="text-center">
                  <div class="h3 accent">$300-600</div>
                  <div class="small text-muted">monthly revenue</div>
                </div>
              </div>
            </div>
          </article>
        </div>

        <!-- Benefits Box -->
        <div class="mt-10">
          <div class="box">
            <div class="grid grid-md-2 gap-6 items-center">
              <div>
                <h3 class="h3 mb-4">Why Partner With Us?</h3>
                <ul class="list">
                  <li><strong>Zero upfront cost</strong> - We provide everything</li>
                  <li><strong>Increase revenue</strong> - Passive income stream</li>
                  <li><strong>Full service</strong> - Installation, stocking, maintenance</li>
                  <li><strong>Monthly payouts</strong> - Direct deposit, transparent reporting</li>
                  <li><strong>Proven results</strong> - 95% of partners earn projected revenue</li>
                </ul>
              </div>
              <div class="text-center">
                <div class="surface p-6">
                  <div class="h2 accent mb-2">95%</div>
                  <div class="text-soft">Success Rate</div>
                  <div class="mt-4">
                    <div class="h3">$250-600</div>
                    <div class="small text-muted">Average monthly earnings per machine</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-8">
          <a href="#contact" class="btn btn--accent">Check eligibility</a>
        </div>
      </div>
    </section>
  `
})
export class VendingMachinesComponent {

}