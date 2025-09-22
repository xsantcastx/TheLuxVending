import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-earnings-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="calculator" class="py-20 bg-neutral-900 relative">
      <!-- Background Elements -->
      <div class="absolute inset-0 opacity-5">
        <div class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.15),transparent_50%)]"></div>
      </div>

      <div class="container-lg mx-auto px-4 relative z-10">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-6xl font-bold text-white mb-6">
            Earnings
            <span class="text-transparent bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text" data-accent-text>
              Calculator
            </span>
          </h2>
          <p class="text-xl text-neutral-400 max-w-3xl mx-auto">
            See your potential monthly and yearly earnings based on machine type and location
          </p>
        </div>

        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <!-- Calculator Form -->
            <div class="bg-neutral-800/50 rounded-2xl p-8 backdrop-blur-sm border border-neutral-700">
              <h3 class="text-2xl font-bold text-white mb-8">Calculate Your Potential</h3>
              
              <div class="space-y-6">
                <!-- Machine Type -->
                <div>
                  <label class="block text-neutral-300 mb-3 font-semibold">Machine Type</label>
                  <div class="grid grid-cols-1 gap-3">
                    <label class="flex items-center p-4 bg-neutral-700/50 rounded-lg border border-neutral-600 hover:border-green-500/50 transition-colors cursor-pointer">
                      <input 
                        type="radio" 
                        name="machineType" 
                        value="snack"
                        [(ngModel)]="selectedMachine"
                        class="sr-only">
                      <div class="w-4 h-4 border-2 border-neutral-400 rounded-full mr-3 flex items-center justify-center">
                        <div class="w-2 h-2 bg-green-500 rounded-full" 
                             [class.opacity-100]="selectedMachine() === 'snack'"
                             [class.opacity-0]="selectedMachine() !== 'snack'"
                             data-accent-bg></div>
                      </div>
                      <div class="flex-1">
                        <div class="font-semibold text-white">Snack Master Pro</div>
                        <div class="text-sm text-neutral-400">$12,500 investment</div>
                      </div>
                      <div class="text-green-400 font-bold" data-accent-text>$800-1,200/mo</div>
                    </label>
                    
                    <label class="flex items-center p-4 bg-neutral-700/50 rounded-lg border border-neutral-600 hover:border-green-500/50 transition-colors cursor-pointer">
                      <input 
                        type="radio" 
                        name="machineType" 
                        value="beverage"
                        [(ngModel)]="selectedMachine"
                        class="sr-only">
                      <div class="w-4 h-4 border-2 border-neutral-400 rounded-full mr-3 flex items-center justify-center">
                        <div class="w-2 h-2 bg-green-500 rounded-full" 
                             [class.opacity-100]="selectedMachine() === 'beverage'"
                             [class.opacity-0]="selectedMachine() !== 'beverage'"
                             data-accent-bg></div>
                      </div>
                      <div class="flex-1">
                        <div class="font-semibold text-white">Beverage Station Elite</div>
                        <div class="text-sm text-neutral-400">$8,900 investment</div>
                      </div>
                      <div class="text-green-400 font-bold" data-accent-text>$600-900/mo</div>
                    </label>
                    
                    <label class="flex items-center p-4 bg-neutral-700/50 rounded-lg border border-neutral-600 hover:border-green-500/50 transition-colors cursor-pointer">
                      <input 
                        type="radio" 
                        name="machineType" 
                        value="combo"
                        [(ngModel)]="selectedMachine"
                        class="sr-only">
                      <div class="w-4 h-4 border-2 border-neutral-400 rounded-full mr-3 flex items-center justify-center">
                        <div class="w-2 h-2 bg-green-500 rounded-full" 
                             [class.opacity-100]="selectedMachine() === 'combo'"
                             [class.opacity-0]="selectedMachine() !== 'combo'"
                             data-accent-bg></div>
                      </div>
                      <div class="flex-1">
                        <div class="font-semibold text-white">Combo Max Ultimate</div>
                        <div class="text-sm text-neutral-400">$18,750 investment</div>
                      </div>
                      <div class="text-green-400 font-bold" data-accent-text>$1,200-1,800/mo</div>
                    </label>
                  </div>
                </div>

                <!-- Location Type -->
                <div>
                  <label class="block text-neutral-300 mb-3 font-semibold">Location Type</label>
                  <select 
                    [(ngModel)]="selectedLocation"
                    class="w-full bg-neutral-700 border border-neutral-600 text-white rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    data-accent-ring>
                    <option value="">Choose location type...</option>
                    <option value="office">Office Building (High Traffic)</option>
                    <option value="school">School/University</option>
                    <option value="hospital">Hospital/Medical Center</option>
                    <option value="gym">Gym/Fitness Center</option>
                    <option value="retail">Retail Store</option>
                    <option value="factory">Factory/Warehouse</option>
                  </select>
                </div>

                <!-- Number of Machines -->
                <div>
                  <label class="block text-neutral-300 mb-3 font-semibold">Number of Machines</label>
                  <div class="relative">
                    <input 
                      type="number" 
                      min="1" 
                      max="10"
                      [(ngModel)]="numberOfMachines"
                      class="w-full bg-neutral-700 border border-neutral-600 text-white rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Enter number of machines"
                      data-accent-ring>
                    <div class="absolute right-4 top-1/2 transform -translate-y-1/2 text-neutral-400">
                      machines
                    </div>
                  </div>
                  <p class="text-sm text-neutral-400 mt-2">Recommended: 1-3 machines per location</p>
                </div>
              </div>
            </div>

            <!-- Results Panel -->
            <div class="bg-gradient-to-br from-neutral-800/50 to-neutral-700/50 rounded-2xl p-8 backdrop-blur-sm border border-neutral-700">
              <h3 class="text-2xl font-bold text-white mb-8">Your Earning Potential</h3>
              
              @if (!selectedMachine() || !selectedLocation() || numberOfMachines() < 1) {
                <div class="text-center py-12">
                  <div class="w-16 h-16 bg-neutral-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg class="w-8 h-8 text-neutral-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                    </svg>
                  </div>
                  <p class="text-neutral-400">Select your preferences to see earning calculations</p>
                </div>
              } @else {
                <div class="space-y-8">
                  <!-- Investment Summary -->
                  <div class="bg-neutral-800/50 rounded-xl p-6">
                    <h4 class="text-lg font-semibold text-white mb-4">Investment Summary</h4>
                    <div class="space-y-3">
                      <div class="flex justify-between">
                        <span class="text-neutral-400">Machine Cost:</span>
                        <span class="text-white font-semibold">{{ formatCurrency(totalInvestment()) }}</span>
                      </div>
                      <div class="flex justify-between">
                        <span class="text-neutral-400">Setup & Installation:</span>
                        <span class="text-white font-semibold">{{ formatCurrency(setupCost()) }}</span>
                      </div>
                      <div class="border-t border-neutral-700 pt-3">
                        <div class="flex justify-between">
                          <span class="text-white font-semibold">Total Investment:</span>
                          <span class="text-2xl font-bold text-white">{{ formatCurrency(totalCost()) }}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Earnings Projection -->
                  <div class="space-y-6">
                    <!-- Monthly Earnings -->
                    <div class="bg-green-500/10 border border-green-500/20 rounded-xl p-6" data-accent-bg>
                      <h4 class="text-lg font-semibold text-white mb-4">Monthly Earnings</h4>
                      <div class="space-y-3">
                        <div class="flex justify-between">
                          <span class="text-neutral-300">Gross Revenue:</span>
                          <span class="text-white font-semibold">{{ formatCurrency(monthlyRevenue().min) }} - {{ formatCurrency(monthlyRevenue().max) }}</span>
                        </div>
                        <div class="flex justify-between">
                          <span class="text-neutral-300">Operating Costs:</span>
                          <span class="text-white font-semibold">{{ formatCurrency(monthlyOperatingCosts()) }}</span>
                        </div>
                        <div class="border-t border-green-500/20 pt-3">
                          <div class="flex justify-between">
                            <span class="text-green-400 font-semibold" data-accent-text>Net Profit:</span>
                            <span class="text-2xl font-bold text-green-400" data-accent-text>{{ formatCurrency(monthlyProfit().min) }} - {{ formatCurrency(monthlyProfit().max) }}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- Annual Projection -->
                    <div class="bg-neutral-800/50 rounded-xl p-6">
                      <h4 class="text-lg font-semibold text-white mb-4">Annual Projection</h4>
                      <div class="space-y-3">
                        <div class="flex justify-between">
                          <span class="text-neutral-400">Annual Profit:</span>
                          <span class="text-2xl font-bold text-white">{{ formatCurrency(annualProfit().min) }} - {{ formatCurrency(annualProfit().max) }}</span>
                        </div>
                        <div class="flex justify-between">
                          <span class="text-neutral-400">ROI:</span>
                          <span class="text-xl font-bold text-green-400" data-accent-text>{{ roi().min }}% - {{ roi().max }}%</span>
                        </div>
                        <div class="flex justify-between">
                          <span class="text-neutral-400">Payback Period:</span>
                          <span class="text-white font-semibold">{{ paybackPeriod().min }}-{{ paybackPeriod().max }} months</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- CTA -->
                  <div class="text-center pt-6">
                    <button class="w-full bg-gradient-to-r from-green-500 to-emerald-400 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-green-600 hover:to-emerald-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105" data-accent-bg>
                      Get Started with This Package
                    </button>
                    <p class="text-sm text-neutral-400 mt-3">
                      * Estimates based on industry averages and location performance data
                    </p>
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
  numberOfMachines = signal<number>(1);

  // Machine data
  private machineData = {
    snack: { cost: 12500, revenueMin: 800, revenueMax: 1200 },
    beverage: { cost: 8900, revenueMin: 600, revenueMax: 900 },
    combo: { cost: 18750, revenueMin: 1200, revenueMax: 1800 }
  };

  // Location multipliers
  private locationMultipliers = {
    office: { min: 1.0, max: 1.2 },
    school: { min: 0.9, max: 1.1 },
    hospital: { min: 1.1, max: 1.3 },
    gym: { min: 0.8, max: 1.0 },
    retail: { min: 1.0, max: 1.15 },
    factory: { min: 0.85, max: 1.05 }
  };

  // Computed values
  totalInvestment = computed(() => {
    const machine = this.selectedMachine();
    if (!machine || !this.machineData[machine as keyof typeof this.machineData]) return 0;
    return this.machineData[machine as keyof typeof this.machineData].cost * this.numberOfMachines();
  });

  setupCost = computed(() => this.totalInvestment() * 0.15); // 15% of machine cost

  totalCost = computed(() => this.totalInvestment() + this.setupCost());

  monthlyRevenue = computed(() => {
    const machine = this.selectedMachine();
    const location = this.selectedLocation();
    
    if (!machine || !location || 
        !this.machineData[machine as keyof typeof this.machineData] ||
        !this.locationMultipliers[location as keyof typeof this.locationMultipliers]) {
      return { min: 0, max: 0 };
    }

    const machineRev = this.machineData[machine as keyof typeof this.machineData];
    const locationMult = this.locationMultipliers[location as keyof typeof this.locationMultipliers];
    
    return {
      min: machineRev.revenueMin * locationMult.min * this.numberOfMachines(),
      max: machineRev.revenueMax * locationMult.max * this.numberOfMachines()
    };
  });

  monthlyOperatingCosts = computed(() => {
    return this.numberOfMachines() * 150; // $150 per machine per month
  });

  monthlyProfit = computed(() => {
    const revenue = this.monthlyRevenue();
    const costs = this.monthlyOperatingCosts();
    
    return {
      min: revenue.min - costs,
      max: revenue.max - costs
    };
  });

  annualProfit = computed(() => {
    const monthly = this.monthlyProfit();
    return {
      min: monthly.min * 12,
      max: monthly.max * 12
    };
  });

  roi = computed(() => {
    const annual = this.annualProfit();
    const totalCost = this.totalCost();
    
    if (totalCost === 0) return { min: 0, max: 0 };
    
    return {
      min: Math.round((annual.min / totalCost) * 100),
      max: Math.round((annual.max / totalCost) * 100)
    };
  });

  paybackPeriod = computed(() => {
    const monthly = this.monthlyProfit();
    const totalCost = this.totalCost();
    
    if (monthly.max === 0) return { min: 0, max: 0 };
    
    return {
      min: Math.round(totalCost / monthly.max),
      max: Math.round(totalCost / monthly.min)
    };
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