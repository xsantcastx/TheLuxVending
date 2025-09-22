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

        <div class="grid grid-md-3 gap-6">
          <!-- ATM Machine -->
          <div class="card">
            <div class="card__media overflow-hidden">
              <img src="assets/atm.jpg" alt="ATM Machine" class="w-full h-48 object-cover" />
            </div>
            <div class="card__body">
              <h3 class="h3 mb-3">ATM Machine</h3>
              <p class="text-soft mb-4">High-traffic cash access point for your customers.</p>
              
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
          </div>

          <!-- Claw Machine -->
          <div class="card">
            <div class="card__media overflow-hidden">
              <img src="assets/Extreme_mini.jpg" alt="Claw Machine" class="w-full h-48 object-cover" />
            </div>
            <div class="card__body">
              <h3 class="h3 mb-3">Claw Machine</h3>
              <p class="text-soft mb-4">Popular entertainment machine that draws repeat customers.</p>
              
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
          </div>

          <!-- Vending Machine -->
          <div class="card">
            <div class="card__media overflow-hidden">
              <img src="assets/mini_mighty.jpg" alt="Vending Machine" class="w-full h-48 object-cover" />
            </div>
            <div class="card__body">
              <h3 class="h3 mb-3">Vending Machine</h3>
              <p class="text-soft mb-4">Snacks and drinks machine perfect for any location.</p>
              
              <!-- Service Areas -->
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="chip">Offices</span>
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
          </div>
        </div>

        <!-- Benefits Box -->
        <div class="mt-10">
          <div class="box">
            <div class="grid grid-md-2 gap-6 items-center">
              <div>
                <h3 class="h3 mb-4">Why Partner With Us?</h3>
                <ul class="list">
                  <li><strong>Zero upfront cost</strong> - We provide everything</li>
                  <li><strong>Prime locations</strong> - We secure high-traffic spots</li>
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