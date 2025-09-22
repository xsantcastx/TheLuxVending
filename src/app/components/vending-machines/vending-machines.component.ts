import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vending-machines',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="machines" class="py-20 bg-gradient-to-b from-neutral-900 to-neutral-800">
      <div class="container-lg mx-auto px-4">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-6xl font-bold text-white mb-6">
            Premium
            <span class="text-transparent bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text" data-accent-text>
              Machines
            </span>
          </h2>
          <p class="text-xl text-neutral-400 max-w-3xl mx-auto">
            Choose from our selection of state-of-the-art vending machines designed for maximum profitability
          </p>
        </div>

        <!-- Machines Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <!-- Snack Master Pro -->
          <div class="bg-neutral-800/50 rounded-2xl overflow-hidden backdrop-blur-sm border border-neutral-700 hover:border-green-500/50 transition-all duration-300 group">
            <!-- Machine Image Placeholder -->
            <div class="aspect-[4/3] bg-gradient-to-br from-neutral-700 to-neutral-800 relative overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="w-24 h-24 bg-neutral-600 rounded-2xl flex items-center justify-center">
                  <svg class="w-12 h-12 text-neutral-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 6h16v2H4zm0 5h16v6H4zm0-10h16c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2z"/>
                  </svg>
                </div>
              </div>
              <div class="absolute top-4 right-4">
                <span class="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold" data-accent-bg>
                  POPULAR
                </span>
              </div>
            </div>
            
            <div class="p-8">
              <h3 class="text-2xl font-bold text-white mb-3">Snack Master Pro</h3>
              <p class="text-neutral-300 mb-6">
                Perfect for offices and schools. 40+ snack selections with touchscreen interface and cashless payments.
              </p>
              
              <div class="space-y-3 mb-6">
                <div class="flex items-center text-neutral-300">
                  <span class="w-2 h-2 bg-green-400 rounded-full mr-3" data-accent-bg></span>
                  40+ product selections
                </div>
                <div class="flex items-center text-neutral-300">
                  <span class="w-2 h-2 bg-green-400 rounded-full mr-3" data-accent-bg></span>
                  Touchscreen interface
                </div>
                <div class="flex items-center text-neutral-300">
                  <span class="w-2 h-2 bg-green-400 rounded-full mr-3" data-accent-bg></span>
                  Cashless payment system
                </div>
                <div class="flex items-center text-neutral-300">
                  <span class="w-2 h-2 bg-green-400 rounded-full mr-3" data-accent-bg></span>
                  Remote monitoring
                </div>
              </div>
              
              <div class="border-t border-neutral-700 pt-6">
                <div class="flex items-center justify-between mb-4">
                  <span class="text-neutral-400">Investment:</span>
                  <span class="text-2xl font-bold text-white">$12,500</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-neutral-400">Est. Monthly Revenue:</span>
                  <span class="text-lg font-semibold text-green-400" data-accent-text>$800-1,200</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Beverage Station Elite -->
          <div class="bg-neutral-800/50 rounded-2xl overflow-hidden backdrop-blur-sm border border-neutral-700 hover:border-green-500/50 transition-all duration-300 group">
            <!-- Machine Image Placeholder -->
            <div class="aspect-[4/3] bg-gradient-to-br from-neutral-700 to-neutral-800 relative overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="w-24 h-24 bg-neutral-600 rounded-2xl flex items-center justify-center">
                  <svg class="w-12 h-12 text-neutral-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 2v2h1v14c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2V4h1V2H7zm3 14c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm4 0c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z"/>
                  </svg>
                </div>
              </div>
            </div>
            
            <div class="p-8">
              <h3 class="text-2xl font-bold text-white mb-3">Beverage Station Elite</h3>
              <p class="text-neutral-300 mb-6">
                High-capacity drinks machine with refrigeration system. Ideal for gyms and high-traffic areas.
              </p>
              
              <div class="space-y-3 mb-6">
                <div class="flex items-center text-neutral-300">
                  <span class="w-2 h-2 bg-green-400 rounded-full mr-3" data-accent-bg></span>
                  32 beverage selections
                </div>
                <div class="flex items-center text-neutral-300">
                  <span class="w-2 h-2 bg-green-400 rounded-full mr-3" data-accent-bg></span>
                  Advanced refrigeration
                </div>
                <div class="flex items-center text-neutral-300">
                  <span class="w-2 h-2 bg-green-400 rounded-full mr-3" data-accent-bg></span>
                  Energy efficient design
                </div>
                <div class="flex items-center text-neutral-300">
                  <span class="w-2 h-2 bg-green-400 rounded-full mr-3" data-accent-bg></span>
                  Anti-theft protection
                </div>
              </div>
              
              <div class="border-t border-neutral-700 pt-6">
                <div class="flex items-center justify-between mb-4">
                  <span class="text-neutral-400">Investment:</span>
                  <span class="text-2xl font-bold text-white">$8,900</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-neutral-400">Est. Monthly Revenue:</span>
                  <span class="text-lg font-semibold text-green-400" data-accent-text>$600-900</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Combo Max Ultimate -->
          <div class="bg-neutral-800/50 rounded-2xl overflow-hidden backdrop-blur-sm border border-neutral-700 hover:border-green-500/50 transition-all duration-300 group md:col-span-2 lg:col-span-1">
            <!-- Machine Image Placeholder -->
            <div class="aspect-[4/3] bg-gradient-to-br from-neutral-700 to-neutral-800 relative overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="w-24 h-24 bg-neutral-600 rounded-2xl flex items-center justify-center">
                  <svg class="w-12 h-12 text-neutral-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 3h18c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2zm0 2v4h18V5H3zm0 6v8h8v-8H3zm10 0v8h8v-8h-8z"/>
                  </svg>
                </div>
              </div>
              <div class="absolute top-4 right-4">
                <span class="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                  PREMIUM
                </span>
              </div>
            </div>
            
            <div class="p-8">
              <h3 class="text-2xl font-bold text-white mb-3">Combo Max Ultimate</h3>
              <p class="text-neutral-300 mb-6">
                The ultimate solution combining snacks and beverages. Maximum variety with dual-zone climate control.
              </p>
              
              <div class="space-y-3 mb-6">
                <div class="flex items-center text-neutral-300">
                  <span class="w-2 h-2 bg-green-400 rounded-full mr-3" data-accent-bg></span>
                  60+ total selections
                </div>
                <div class="flex items-center text-neutral-300">
                  <span class="w-2 h-2 bg-green-400 rounded-full mr-3" data-accent-bg></span>
                  Dual-zone climate control
                </div>
                <div class="flex items-center text-neutral-300">
                  <span class="w-2 h-2 bg-green-400 rounded-full mr-3" data-accent-bg></span>
                  Premium touchscreen display
                </div>
                <div class="flex items-center text-neutral-300">
                  <span class="w-2 h-2 bg-green-400 rounded-full mr-3" data-accent-bg></span>
                  IoT connectivity & analytics
                </div>
              </div>
              
              <div class="border-t border-neutral-700 pt-6">
                <div class="flex items-center justify-between mb-4">
                  <span class="text-neutral-400">Investment:</span>
                  <span class="text-2xl font-bold text-white">$18,750</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-neutral-400">Est. Monthly Revenue:</span>
                  <span class="text-lg font-semibold text-green-400" data-accent-text>$1,200-1,800</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Benefits Section -->
        <div class="bg-gradient-to-r from-neutral-800/50 to-neutral-700/50 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 class="text-3xl font-bold text-white mb-6">Why Choose Our Machines?</h3>
              <div class="space-y-6">
                <div class="flex items-start">
                  <div class="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-4 mt-1" data-accent-bg>
                    <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-xl font-semibold text-white mb-2">Industry-Leading Technology</h4>
                    <p class="text-neutral-300">State-of-the-art machines with the latest payment systems and monitoring technology.</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-4 mt-1" data-accent-bg>
                    <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-xl font-semibold text-white mb-2">Full Service Support</h4>
                    <p class="text-neutral-300">Complete maintenance, restocking, and customer service handled by our team.</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-4 mt-1" data-accent-bg>
                    <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-xl font-semibold text-white mb-2">Prime Locations Guaranteed</h4>
                    <p class="text-neutral-300">We secure high-traffic locations to maximize your return on investment.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="relative">
              <div class="bg-gradient-to-br from-green-500/20 to-emerald-400/20 rounded-2xl p-8 text-center">
                <div class="text-4xl font-bold text-white mb-2">2.5x</div>
                <div class="text-neutral-300 mb-4">Higher ROI than traditional investments</div>
                <div class="text-2xl font-bold text-green-400 mb-2" data-accent-text>15-25%</div>
                <div class="text-neutral-300">Annual return on investment</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class VendingMachinesComponent {

}