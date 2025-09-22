import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 min-h-screen flex items-center">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-5">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 25px 25px, rgba(255,255,255,0.15) 2px, transparent 0), radial-gradient(circle at 75px 75px, rgba(255,255,255,0.1) 2px, transparent 0); background-size: 100px 100px;"></div>
      </div>

      <div class="container-lg mx-auto px-4 py-20 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <!-- Main Heading -->
          <h1 class="text-5xl md:text-7xl font-bold text-white mb-6">
            Transform Your
            <span class="block text-transparent bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text" data-accent-text>
              Vending Business
            </span>
          </h1>
          
          <!-- Subtitle -->
          <p class="text-xl md:text-2xl text-neutral-300 mb-8 max-w-3xl mx-auto">
            Partner with us to revolutionize your vending operations. We provide premium machines, 
            prime locations, and guaranteed passive income streams.
          </p>

          <!-- Key Stats -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div class="bg-neutral-800/50 rounded-xl p-6 backdrop-blur-sm">
              <div class="text-3xl font-bold text-white mb-2">500+</div>
              <div class="text-neutral-400">Active Machines</div>
            </div>
            <div class="bg-neutral-800/50 rounded-xl p-6 backdrop-blur-sm">
              <div class="text-3xl font-bold text-white mb-2">$2.5M+</div>
              <div class="text-neutral-400">Revenue Generated</div>
            </div>
            <div class="bg-neutral-800/50 rounded-xl p-6 backdrop-blur-sm">
              <div class="text-3xl font-bold text-white mb-2">98%</div>
              <div class="text-neutral-400">Client Satisfaction</div>
            </div>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              class="bg-gradient-to-r from-green-500 to-emerald-400 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-green-600 hover:to-emerald-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 min-w-[200px]"
              data-accent-bg>
              Start Earning Now
            </button>
            <button class="border-2 border-neutral-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-neutral-800 hover:border-neutral-500 transition-all duration-300 min-w-[200px]">
              View Calculator
            </button>
          </div>

          <!-- Trust Indicators -->
          <div class="mt-16 pt-8 border-t border-neutral-800">
            <p class="text-neutral-500 text-sm mb-6">Trusted by leading businesses</p>
            <div class="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div class="text-neutral-400 font-semibold text-lg">TechCorp</div>
              <div class="text-neutral-400 font-semibold text-lg">Innovate Ltd</div>
              <div class="text-neutral-400 font-semibold text-lg">Global Ventures</div>
              <div class="text-neutral-400 font-semibold text-lg">Future Systems</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  `
})
export class HeroComponent {

}