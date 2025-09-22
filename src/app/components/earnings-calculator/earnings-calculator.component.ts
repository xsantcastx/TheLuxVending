import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-earnings-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="earn" class="section">
      <div class="container-lg">
        <div class="text-center mb-8">
          <h2 class="h2 mb-4">Earnings <span class="accent">Calculator</span></h2>
          <p class="text-soft">See how much you could earn each month</p>
        </div>

        <!-- Earnings Examples -->
        <div class="grid grid-md-3 gap-6 mb-12">
          <div class="box text-center">
            <div class="font-semibold mb-2">Busy Gas Station – ATM</div>
            <div class="text-sm text-soft mb-4">250 transactions/mo × $2.00 surcharge × 25% share</div>
            <div class="h3 accent">≈ $125/mo to you</div>
          </div>
          <div class="box text-center">
            <div class="font-semibold mb-2">Mall Corridor – Claw</div>
            <div class="text-sm text-soft mb-4">1,200 plays/mo × $1.00 price × 25% share</div>
            <div class="h3 accent">≈ $300/mo to you</div>
          </div>
          <div class="box text-center">
            <div class="font-semibold mb-2">Gym – Vending</div>
            <div class="text-sm text-soft mb-4">$1,500 sales/mo × 25% share</div>
            <div class="h3 accent">≈ $375/mo to you</div>
          </div>
        </div>
        
        <p class="text-xs text-soft text-center mb-8">Examples are illustrative; actual results vary by foot traffic and location quality.</p>

        <div class="calculator">
          <div class="grid grid-md-2 gap-8">
            <!-- Input Side -->
            <div>
              <h3 class="h3 mb-6">Calculate Your Potential</h3>
              
              <!-- Machine Type -->
              <div class="mb-6">
                <label class="block font-semibold mb-3">Machine Type</label>
                <div class="grid gap-3">
                  <label class="radio-card" [class.selected]="selectedMachine() === 'atm'">
                    <input 
                      type="radio" 
                      name="machineType" 
                      value="atm"
                      [(ngModel)]="selectedMachine"
                      class="sr-only">
                    <div class="flex justify-between items-center">
                      <div>
                        <div class="font-semibold">ATM Machine (25% share)</div>
                        <div class="small text-muted">High-traffic locations</div>
                      </div>
                      <div class="accent font-bold">$200-500</div>
                    </div>
                  </label>
                  
                  <label class="radio-card" [class.selected]="selectedMachine() === 'claw'">
                    <input 
                      type="radio" 
                      name="machineType" 
                      value="claw"
                      [(ngModel)]="selectedMachine"
                      class="sr-only">
                    <div class="flex justify-between items-center">
                      <div>
                        <div class="font-semibold">Claw Machine (25% share)</div>
                        <div class="small text-muted">Entertainment focused</div>
                      </div>
                      <div class="accent font-bold">$150-350</div>
                    </div>
                  </label>
                  
                  <label class="radio-card" [class.selected]="selectedMachine() === 'vending'">
                    <input 
                      type="radio" 
                      name="machineType" 
                      value="vending"
                      [(ngModel)]="selectedMachine"
                      class="sr-only">
                    <div class="flex justify-between items-center">
                      <div>
                        <div class="font-semibold">Vending Machine (25% share)</div>
                        <div class="small text-muted">Snacks & beverages</div>
                      </div>
                      <div class="accent font-bold">$300-600</div>
                    </div>
                  </label>
                </div>
              </div>

              <!-- Location Type -->
              <div class="mb-6">
                <label class="block font-semibold mb-3">Business Type</label>
                <select 
                  [(ngModel)]="selectedLocation"
                  class="select w-full">
                  <option value="">Choose your business type...</option>
                  <option value="gym">Gym/Fitness Center</option>
                  <option value="office">Office Building</option>
                  <option value="hotel">Hotel/Motel</option>
                  <option value="convenience">Convenience Store</option>
                  <option value="laundromat">Laundromat</option>
                  <option value="restaurant">Restaurant/Bar</option>
                </select>
              </div>

              <!-- Daily Customers -->
              <div class="mb-6">
                <label class="block font-semibold mb-3">Daily Customer Count</label>
                <input 
                  type="number" 
                  min="10" 
                  max="1000"
                  [(ngModel)]="dailyCustomers"
                  class="input w-full"
                  placeholder="Approximate daily foot traffic">
                <p class="form-note mt-2">Higher foot traffic = higher earnings potential</p>
              </div>
            </div>

            <!-- Results Side -->
            <div class="calculator__results">
              <h3 class="h3 mb-6">Your Monthly Earnings</h3>
              
              @if (!selectedMachine() || !selectedLocation() || dailyCustomers() < 1) {
                <div class="text-center py-12">
                  <div class="text-6xl mb-4">📊</div>
                  <p class="text-muted">Complete the form to see your earnings potential</p>
                </div>
              } @else {
                <div class="space-y-6">
                  <!-- Monthly Revenue -->
                  <div>
                    <div class="flex justify-between items-center mb-2">
                      <span class="text-muted">Estimated Monthly Revenue</span>
                      <span class="h3 accent">{{ formatCurrency(monthlyRevenue()) }}</span>
                    </div>
                    <div class="w-full bg-neutral-800 rounded-full h-2">
                      <div class="accent-bg h-2 rounded-full" [style.width.%]="revenuePercentage()"></div>
                    </div>
                  </div>

                  <!-- Your Share -->
                  <div>
                    <div class="flex justify-between items-center mb-2">
                      <span class="text-muted">Your Share ({{ yourSharePercentage() }}%)</span>
                      <span class="h2">{{ formatCurrency(yourShare()) }}</span>
                    </div>
                    <p class="small text-muted">After operational costs and our service fee</p>
                  </div>

                  <!-- Annual Projection -->
                  <div class="border-t pt-4">
                    <div class="flex justify-between items-center">
                      <span class="text-muted">Annual Earnings</span>
                      <span class="h2 accent">{{ formatCurrency(annualEarnings()) }}</span>
                    </div>
                  </div>

                  <!-- Performance Indicator -->
                  <div class="box">
                    <div class="text-center">
                      <div class="h3 accent mb-2">{{ performanceRating() }}</div>
                      <div class="small text-muted">Performance Rating</div>
                      <p class="mt-3 small">{{ performanceMessage() }}</p>
                    </div>
                  </div>

                  <!-- CTA -->
                  <div class="text-center">
                    <a href="#contact" class="btn btn--accent w-full">Get My Custom Quote</a>
                    <p class="form-note mt-3">* Estimates based on industry averages and similar locations</p>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class EarningsCalculatorComponent {
  selectedMachine = signal<string>('');
  selectedLocation = signal<string>('');
  dailyCustomers = signal<number>(0);

  // Machine data
  private machineData = {
    atm: { revenueMin: 200, revenueMax: 500 },
    claw: { revenueMin: 150, revenueMax: 350 },
    vending: { revenueMin: 300, revenueMax: 600 }
  };

  // Location multipliers
  private locationMultipliers = {
    gym: { min: 1.0, max: 1.2 },
    office: { min: 1.1, max: 1.3 },
    hotel: { min: 1.2, max: 1.4 },
    convenience: { min: 1.0, max: 1.15 },
    laundromat: { min: 0.8, max: 1.0 },
    restaurant: { min: 0.9, max: 1.1 }
  };

  // Traffic multipliers
  private getTrafficMultiplier = computed(() => {
    const customers = this.dailyCustomers();
    if (customers >= 500) return 1.3;
    if (customers >= 200) return 1.1;
    if (customers >= 100) return 1.0;
    if (customers >= 50) return 0.8;
    return 0.6;
  });

  monthlyRevenue = computed(() => {
    const machine = this.selectedMachine();
    const location = this.selectedLocation();
    
    if (!machine || !location || 
        !this.machineData[machine as keyof typeof this.machineData] ||
        !this.locationMultipliers[location as keyof typeof this.locationMultipliers]) {
      return 0;
    }

    const machineRev = this.machineData[machine as keyof typeof this.machineData];
    const locationMult = this.locationMultipliers[location as keyof typeof this.locationMultipliers];
    const trafficMult = this.getTrafficMultiplier();
    
    // Use average of min/max for display
    const avgRevenue = (machineRev.revenueMin + machineRev.revenueMax) / 2;
    const avgLocation = (locationMult.min + locationMult.max) / 2;
    
    return Math.round(avgRevenue * avgLocation * trafficMult);
  });

  yourSharePercentage = computed(() => {
    // Flat 25% profit share for all machine types
    return 25;
  });

  yourShare = computed(() => {
    const revenue = this.monthlyRevenue();
    const percentage = this.yourSharePercentage();
    return Math.round(revenue * (percentage / 100));
  });

  annualEarnings = computed(() => {
    return this.yourShare() * 12;
  });

  revenuePercentage = computed(() => {
    const revenue = this.monthlyRevenue();
    const maxPossible = 800; // Max possible revenue for calculation
    return Math.min((revenue / maxPossible) * 100, 100);
  });

  performanceRating = computed(() => {
    const monthly = this.yourShare();
    if (monthly >= 400) return 'Excellent';
    if (monthly >= 250) return 'Good';
    if (monthly >= 150) return 'Average';
    return 'Poor';
  });

  performanceMessage = computed(() => {
    const rating = this.performanceRating();
    const messages = {
      'Excellent': 'Outstanding location and traffic! This setup has high earning potential.',
      'Good': 'Solid earning potential. Consider adding additional machines.',
      'Average': 'Moderate earnings expected. Location traffic may be limiting factor.',
      'Poor': 'Low earnings potential. Consider higher traffic location or different machine type.'
    };
    return messages[rating as keyof typeof messages];
  });

  formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  }
}