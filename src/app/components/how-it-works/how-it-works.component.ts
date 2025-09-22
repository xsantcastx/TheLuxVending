import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="how-it-works" class="py-20 bg-neutral-900 relative">
      <!-- Background Elements -->
      <div class="absolute inset-0 opacity-5">
        <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-green-400/20 to-transparent rounded-full blur-3xl"></div>
        <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-bl from-emerald-400/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div class="container-lg mx-auto px-4 relative z-10">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-6xl font-bold text-white mb-6">
            How It
            <span class="text-transparent bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text" data-accent-text>
              Works
            </span>
          </h2>
          <p class="text-xl text-neutral-400 max-w-3xl mx-auto">
            Get started with our proven 3-step process and begin earning passive income within 30 days
          </p>
        </div>

        <!-- Steps -->
        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <!-- Step 1 -->
            <div class="relative">
              <!-- Step Number -->
              <div class="flex items-center mb-6">
                <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-400 rounded-2xl flex items-center justify-center text-white font-bold text-2xl mr-4" data-accent-bg>
                  1
                </div>
                <div class="h-px bg-gradient-to-r from-green-500 to-transparent flex-1 hidden md:block" data-accent-bg></div>
              </div>
              
              <!-- Content -->
              <div class="bg-neutral-800/50 rounded-2xl p-8 backdrop-blur-sm h-full">
                <!-- Icon -->
                <div class="w-12 h-12 mb-6 text-green-400" data-accent-text>
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                
                <h3 class="text-2xl font-bold text-white mb-4">Choose Your Package</h3>
                <p class="text-neutral-300 mb-6">
                  Select from our range of vending machine packages tailored to your investment level and business goals.
                </p>
                
                <ul class="space-y-3 text-neutral-400">
                  <li class="flex items-center">
                    <span class="w-2 h-2 bg-green-400 rounded-full mr-3" data-accent-bg></span>
                    Premium machine selection
                  </li>
                  <li class="flex items-center">
                    <span class="w-2 h-2 bg-green-400 rounded-full mr-3" data-accent-bg></span>
                    Flexible payment options
                  </li>
                  <li class="flex items-center">
                    <span class="w-2 h-2 bg-green-400 rounded-full mr-3" data-accent-bg></span>
                    Custom package creation
                  </li>
                </ul>
              </div>
            </div>

            <!-- Step 2 -->
            <div class="relative">
              <!-- Step Number -->
              <div class="flex items-center mb-6">
                <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-400 rounded-2xl flex items-center justify-center text-white font-bold text-2xl mr-4" data-accent-bg>
                  2
                </div>
                <div class="h-px bg-gradient-to-r from-green-500 to-transparent flex-1 hidden md:block" data-accent-bg></div>
              </div>
              
              <!-- Content -->
              <div class="bg-neutral-800/50 rounded-2xl p-8 backdrop-blur-sm h-full">
                <!-- Icon -->
                <div class="w-12 h-12 mb-6 text-green-400" data-accent-text>
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                
                <h3 class="text-2xl font-bold text-white mb-4">We Handle Setup</h3>
                <p class="text-neutral-300 mb-6">
                  Our expert team handles everything from location scouting to machine installation and initial stocking.
                </p>
                
                <ul class="space-y-3 text-neutral-400">
                  <li class="flex items-center">
                    <span class="w-2 h-2 bg-green-400 rounded-full mr-3" data-accent-bg></span>
                    Prime location placement
                  </li>
                  <li class="flex items-center">
                    <span class="w-2 h-2 bg-green-400 rounded-full mr-3" data-accent-bg></span>
                    Professional installation
                  </li>
                  <li class="flex items-center">
                    <span class="w-2 h-2 bg-green-400 rounded-full mr-3" data-accent-bg></span>
                    Initial inventory stocking
                  </li>
                </ul>
              </div>
            </div>

            <!-- Step 3 -->
            <div class="relative">
              <!-- Step Number -->
              <div class="flex items-center mb-6">
                <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-400 rounded-2xl flex items-center justify-center text-white font-bold text-2xl mr-4" data-accent-bg>
                  3
                </div>
              </div>
              
              <!-- Content -->
              <div class="bg-neutral-800/50 rounded-2xl p-8 backdrop-blur-sm h-full">
                <!-- Icon -->
                <div class="w-12 h-12 mb-6 text-green-400" data-accent-text>
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"/>
                  </svg>
                </div>
                
                <h3 class="text-2xl font-bold text-white mb-4">Start Earning</h3>
                <p class="text-neutral-300 mb-6">
                  Watch your passive income grow as customers use your machines. We provide ongoing support and maintenance.
                </p>
                
                <ul class="space-y-3 text-neutral-400">
                  <li class="flex items-center">
                    <span class="w-2 h-2 bg-green-400 rounded-full mr-3" data-accent-bg></span>
                    Real-time sales tracking
                  </li>
                  <li class="flex items-center">
                    <span class="w-2 h-2 bg-green-400 rounded-full mr-3" data-accent-bg></span>
                    Monthly revenue reports
                  </li>
                  <li class="flex items-center">
                    <span class="w-2 h-2 bg-green-400 rounded-full mr-3" data-accent-bg></span>
                    24/7 maintenance support
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Bottom CTA -->
          <div class="text-center mt-16">
            <button 
              class="bg-gradient-to-r from-green-500 to-emerald-400 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-green-600 hover:to-emerald-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              data-accent-bg>
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  `
})
export class HowItWorksComponent {

}