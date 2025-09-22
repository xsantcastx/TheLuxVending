import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

type MachineType = 'atm' | 'claw' | 'vending';
type LocationType = 'gym' | 'office' | 'hotel' | 'convenience' | 'laundromat' | 'restaurant' | '';

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
            <div class="text-sm text-soft mb-4">~250 transactions/mo × $3.50 surcharge × 25% share</div>
          </div>
          <div class="box text-center">
            <div class="font-semibold mb-2">Mall Corridor – Claw</div>
            <div class="text-sm text-soft mb-4">~1,200 plays/mo × $2.00 price × 25% of net</div>
          </div>
          <div class="box text-center">
            <div class="font-semibold mb-2">Gym – Vending</div>
            <div class="text-sm text-soft mb-4">~$1,500 sales/mo × 45% margin × 25% share</div>
          </div>
        </div>

        <p class="text-xs text-soft text-center mb-8">
          Examples are illustrative; actual results vary by foot traffic, business type and pricing.
        </p>

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
                      [ngModel]="selectedMachine()"
                      (ngModelChange)="selectedMachine.set('atm')"
                      class="sr-only">
                    <div class="flex justify-between items-center">
                      <div>
                        <div class="font-semibold">ATM Machine (25% share)</div>
                        <div class="small text-muted">High-traffic locations</div>
                      </div>
                      <div class="accent font-bold">$3.50 surcharge</div>
                    </div>
                  </label>

                  <label class="radio-card" [class.selected]="selectedMachine() === 'claw'">
                    <input
                      type="radio"
                      name="machineType"
                      [ngModel]="selectedMachine()"
                      (ngModelChange)="selectedMachine.set('claw')"
                      class="sr-only">
                    <div class="flex justify-between items-center">
                      <div>
                        <div class="font-semibold">Claw Machine (25% of net)</div>
                        <div class="small text-muted">Entertainment focused</div>
                      </div>
                      <div class="accent font-bold">$2.00 / play</div>
                    </div>
                  </label>

                  <label class="radio-card" [class.selected]="selectedMachine() === 'vending'">
                    <input
                      type="radio"
                      name="machineType"
                      [ngModel]="selectedMachine()"
                      (ngModelChange)="selectedMachine.set('vending')"
                      class="sr-only">
                    <div class="flex justify-between items-center">
                      <div>
                        <div class="font-semibold">Vending Machine (25% of profit)</div>
                        <div class="small text-muted">Snacks & beverages</div>
                      </div>
                      <div class="accent font-bold">~45% margin</div>
                    </div>
                  </label>
                </div>
              </div>

              <!-- Business Type -->
              <div class="mb-6">
                <label class="block font-semibold mb-3">Business Type</label>
                <select
                  class="select w-full"
                  [ngModel]="selectedLocation()"
                  (ngModelChange)="selectedLocation.set($event)">
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
                  max="2000"
                  class="input w-full"
                  placeholder="Approximate daily foot traffic"
                  [ngModel]="dailyCustomers()"
                  (ngModelChange)="dailyCustomers.set($event)">
                <p class="form-note mt-2">Higher foot traffic = higher earnings potential</p>
              </div>
            </div>

            <!-- Results Side -->
            <div class="calculator__results">
              <h3 class="h3 mb-6">Your Monthly Earnings</h3>

              @if (!selectedMachine() || !selectedLocation() || dailyCustomers() < 10) {
                <div class="text-center py-12">
                  <div class="text-6xl mb-4">📊</div>
                  <p class="text-muted">Complete the form to see your earnings potential</p>
                </div>
              } @else {
                <div class="space-y-6">
                  <!-- Progress -->
                  <div>
                    <div class="w-full bg-neutral-800 rounded-full h-2">
                      <div class="accent-bg h-2 rounded-full" [style.width.%]="revenuePercentage()"></div>
                    </div>
                  </div>

                  <!-- Your Share -->
                  <div>
                    <div class="flex justify-between items-center mb-2">
                      <span class="text-muted">
                        Your Share ({{ yourSharePercentage() }}%)
                        <span class="small text-soft"> — {{ shareBasisLabel() }}</span>
                      </span>
                      <span class="h2">{{ formatCurrency(yourShare()) }}</span>
                    </div>
                    <p class="small text-muted">{{ breakdownLine() }}</p>
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
                    <a href="#contact" class="btn btn--accent w-full">Check eligibility</a>
                    <p class="form-note mt-3">* Transparent formulas based on industry-style assumptions.</p>
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
  // -----------------------
  // Assumptions / Tunables
  // -----------------------
  private readonly DAYS_PER_MONTH = 30;

  private readonly ATM_SURCHARGE = 3.50;      // USD per withdrawal (your note)
  private readonly CLAW_PRICE = 2.00;         // USD per play (your note)
  private readonly PRIZE_PAYOUT = 0.35;       // % of claw gross paid out as prizes (typical range 25–40%)
  private readonly VEND_AVG_TICKET = 2.50;    // USD avg sale for vending
  private readonly VEND_MARGIN = 0.45;        // % gross margin on vending sales (typical 35–55%)
  private readonly SHARE_PCT = 25;            // Merchant profit share

  // Location behavior profiles (rates are per customer per day)
  private readonly locationRates: Record<Exclude<LocationType, ''>, {
    atmConv: number;          // % of customers who do an ATM transaction
    clawPlayRate: number;     // plays per customer (can be < 1)
    vendBuyRate: number;      // % of customers who buy from vending
  }> = {
    gym:         { atmConv: 0.020, clawPlayRate: 0.10, vendBuyRate: 0.12 },
    office:      { atmConv: 0.030, clawPlayRate: 0.08, vendBuyRate: 0.14 },
    hotel:       { atmConv: 0.040, clawPlayRate: 0.12, vendBuyRate: 0.18 },
    convenience: { atmConv: 0.050, clawPlayRate: 0.10, vendBuyRate: 0.22 },
    laundromat:  { atmConv: 0.060, clawPlayRate: 0.06, vendBuyRate: 0.25 },
    restaurant:  { atmConv: 0.030, clawPlayRate: 0.15, vendBuyRate: 0.14 }
  };

  // -----------------------
  // Inputs (Signals)
  // -----------------------
  selectedMachine = signal<MachineType | ''>('');
  selectedLocation = signal<LocationType>('');
  dailyCustomers = signal<number>(0);

  // -----------------------
  // Core computed math
  // -----------------------
  private location() {
    const loc = this.selectedLocation();
    return loc ? this.locationRates[loc] : undefined;
  }

  private monthlyATMRevenue = computed(() => {
    const loc = this.location();
    if (!loc) return 0;
    const tx = this.dailyCustomers() * loc.atmConv * this.DAYS_PER_MONTH;
    const gross = tx * this.ATM_SURCHARGE;              // surcharge is effectively revenue pool
    return gross;                                       // share is applied later
  });

  private monthlyClawNet = computed(() => {
    const loc = this.location();
    if (!loc) return 0;
    const plays = this.dailyCustomers() * loc.clawPlayRate * this.DAYS_PER_MONTH;
    const gross = plays * this.CLAW_PRICE;
    const prizeCost = gross * this.PRIZE_PAYOUT;
    const net = Math.max(gross - prizeCost, 0);
    return net;                                         // share is applied later
  });

  private monthlyVendingProfit = computed(() => {
    const loc = this.location();
    if (!loc) return 0;
    const buys = this.dailyCustomers() * loc.vendBuyRate * this.DAYS_PER_MONTH;
    const sales = buys * this.VEND_AVG_TICKET;
    const grossProfit = sales * this.VEND_MARGIN;
    return Math.max(grossProfit, 0);                    // share is applied later
  });

  // What is the share applied to?
  private shareBasis = computed<'revenue' | 'net' | 'profit' | ''>(() => {
    switch (this.selectedMachine()) {
      case 'atm': return 'revenue';  // 25% of surcharge revenue
      case 'claw': return 'net';     // 25% of net after prizes
      case 'vending': return 'profit'; // 25% of gross profit
      default: return '';
    }
  });

  // Merchant share %
  yourSharePercentage = computed(() => this.SHARE_PCT);

  // Monthly merchant share ($)
  yourShare = computed(() => {
    const m = this.selectedMachine();
    if (!m || !this.location()) return 0;

    const pct = this.SHARE_PCT / 100;
    if (m === 'atm')      return Math.round(this.monthlyATMRevenue() * pct);
    if (m === 'claw')     return Math.round(this.monthlyClawNet() * pct);
    if (m === 'vending')  return Math.round(this.monthlyVendingProfit() * pct);
    return 0;
  });

  annualEarnings = computed(() => this.yourShare() * 12);

  // Progress bar: compare to an optimistic cap for the chosen machine so the bar feels right
  private maxByMachine = computed(() => {
    switch (this.selectedMachine()) {
      case 'atm': return 600;      // optimistic monthly merchant share cap for ATM
      case 'claw': return 800;     // optimistic monthly merchant share cap for Claw
      case 'vending': return 700;  // optimistic monthly merchant share cap for Vending
      default: return 800;
    }
  });

  revenuePercentage = computed(() => {
    const max = this.maxByMachine();
    return Math.min((this.yourShare() / max) * 100, 100);
  });

  performanceRating = computed(() => {
    const m = this.yourShare();
    if (m >= 500) return 'Excellent';
    if (m >= 300) return 'Good';
    if (m >= 175) return 'Average';
    return 'Poor';
    // thresholds loosely aligned with caps above
  });

  performanceMessage = computed(() => {
    const rating = this.performanceRating();
    const messages = {
      'Excellent': 'Outstanding location and traffic! This setup has high earning potential.',
      'Good': 'Solid earning potential. Consider adding additional machines.',
      'Average': 'Moderate earnings expected. Location traffic may be limiting factor.',
      'Poor': 'Low earnings potential. Consider higher traffic location or different machine type.'
    } as const;
    return messages[rating as keyof typeof messages];
  });

  // UI helpers
  shareBasisLabel = computed(() => {
    const b = this.shareBasis();
    if (b === 'revenue') return 'of surcharge revenue';
    if (b === 'net') return 'of net after prizes';
    if (b === 'profit') return 'of vending gross profit';
    return '';
  });

  breakdownLine = computed(() => {
    const m = this.selectedMachine();
    const d = this.DAYS_PER_MONTH;
    const customers = this.dailyCustomers();
    const loc = this.location();
    if (!m || !loc) return '';

    if (m === 'atm') {
      const tx = Math.round(customers * loc.atmConv * d);
      return `${tx} ATM transactions/mo × $${this.ATM_SURCHARGE.toFixed(2)} surcharge × ${this.SHARE_PCT}% share`;
    }
    if (m === 'claw') {
      const plays = Math.round(customers * loc.clawPlayRate * d);
      return `${plays} plays/mo × $${this.CLAW_PRICE.toFixed(2)} − ${Math.round(this.PRIZE_PAYOUT*100)}% prizes → ${this.SHARE_PCT}% share`;
    }
    // vending
    const buys = Math.round(customers * loc.vendBuyRate * d);
    return `${buys} sales/mo × $${this.VEND_AVG_TICKET.toFixed(2)} × ${Math.round(this.VEND_MARGIN*100)}% margin → ${this.SHARE_PCT}% share`;
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
