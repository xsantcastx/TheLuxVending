import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <footer id="contact" class="bg-gradient-to-b from-neutral-800 to-neutral-900 relative">
      <!-- Main Footer Content -->
      <div class="py-20">
        <div class="container-lg mx-auto px-4">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            <!-- Contact Form -->
            <div>
              <h2 class="text-4xl font-bold text-white mb-6">
                Get
                <span class="text-transparent bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text" data-accent-text>
                  Started Today
                </span>
              </h2>
              <p class="text-xl text-neutral-300 mb-8">
                Ready to start your vending machine business? Contact us for a free consultation and custom proposal.
              </p>
              
              <form class="space-y-6" (ngSubmit)="onSubmit($event)">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label for="firstName" class="block text-neutral-300 mb-2 font-semibold">First Name *</label>
                    <input 
                      type="text" 
                      id="firstName"
                      [(ngModel)]="firstName"
                      name="firstName"
                      required
                      class="w-full bg-neutral-700 border border-neutral-600 text-white rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      placeholder="Enter your first name"
                      data-accent-ring>
                  </div>
                  <div>
                    <label for="lastName" class="block text-neutral-300 mb-2 font-semibold">Last Name *</label>
                    <input 
                      type="text" 
                      id="lastName"
                      [(ngModel)]="lastName"
                      name="lastName"
                      required
                      class="w-full bg-neutral-700 border border-neutral-600 text-white rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      placeholder="Enter your last name"
                      data-accent-ring>
                  </div>
                </div>
                
                <div>
                  <label for="email" class="block text-neutral-300 mb-2 font-semibold">Email Address *</label>
                  <input 
                    type="email" 
                    id="email"
                    [(ngModel)]="email"
                    name="email"
                    required
                    class="w-full bg-neutral-700 border border-neutral-600 text-white rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    placeholder="Enter your email address"
                    data-accent-ring>
                </div>
                
                <div>
                  <label for="phone" class="block text-neutral-300 mb-2 font-semibold">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone"
                    [(ngModel)]="phone"
                    name="phone"
                    class="w-full bg-neutral-700 border border-neutral-600 text-white rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    placeholder="Enter your phone number"
                    data-accent-ring>
                </div>
                
                <div>
                  <label for="investmentRange" class="block text-neutral-300 mb-2 font-semibold">Investment Range</label>
                  <select 
                    id="investmentRange"
                    [(ngModel)]="investmentRange"
                    name="investmentRange"
                    class="w-full bg-neutral-700 border border-neutral-600 text-white rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    data-accent-ring>
                    <option value="">Select investment range...</option>
                    <option value="under-10k">Under $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="over-100k">Over $100,000</option>
                  </select>
                </div>
                
                <div>
                  <label for="message" class="block text-neutral-300 mb-2 font-semibold">Message</label>
                  <textarea 
                    id="message"
                    [(ngModel)]="message"
                    name="message"
                    rows="4"
                    class="w-full bg-neutral-700 border border-neutral-600 text-white rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your goals and any questions you have..."
                    data-accent-ring></textarea>
                </div>
                
                <button 
                  type="submit"
                  [disabled]="isSubmitting()"
                  class="w-full bg-gradient-to-r from-green-500 to-emerald-400 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-green-600 hover:to-emerald-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  data-accent-bg>
                  @if (isSubmitting()) {
                    <span class="flex items-center justify-center">
                      <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  } @else {
                    Send Message & Get Free Consultation
                  }
                </button>
                
                @if (submitStatus()) {
                  <div class="text-center p-4 rounded-lg"
                       [class.bg-green-500/20]="submitStatus() === 'success'"
                       [class.text-green-400]="submitStatus() === 'success'"
                       [class.bg-red-500/20]="submitStatus() === 'error'"
                       [class.text-red-400]="submitStatus() === 'error'">
                    @if (submitStatus() === 'success') {
                      <p>✅ Thank you! We'll contact you within 24 hours.</p>
                    } @else {
                      <p>❌ Something went wrong. Please try again.</p>
                    }
                  </div>
                }
              </form>
            </div>
            
            <!-- Company Info -->
            <div>
              <h3 class="text-3xl font-bold text-white mb-8">VendTech Solutions</h3>
              
              <!-- Contact Info -->
              <div class="space-y-6 mb-12">
                <div class="flex items-start">
                  <div class="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mr-4 mt-1" data-accent-bg>
                    <svg class="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24" data-accent-text>
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-lg font-semibold text-white mb-1">Headquarters</h4>
                    <p class="text-neutral-300">
                      123 Business Plaza<br>
                      Suite 500<br>
                      Los Angeles, CA 90210
                    </p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mr-4 mt-1" data-accent-bg>
                    <svg class="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24" data-accent-text>
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-lg font-semibold text-white mb-1">Phone</h4>
                    <p class="text-neutral-300">
                      <a href="tel:+15551234567" class="hover:text-white transition-colors">(555) 123-4567</a><br>
                      <span class="text-sm text-neutral-400">Mon-Fri 8AM-6PM PST</span>
                    </p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mr-4 mt-1" data-accent-bg>
                    <svg class="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24" data-accent-text>
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-lg font-semibold text-white mb-1">Email</h4>
                    <p class="text-neutral-300">
                      <a href="mailto:info@vendtechsolutions.com" class="hover:text-white transition-colors">info@vendtechsolutions.com</a><br>
                      <span class="text-sm text-neutral-400">We respond within 4 hours</span>
                    </p>
                  </div>
                </div>
              </div>
              
              <!-- Social Media -->
              <div class="mb-12">
                <h4 class="text-lg font-semibold text-white mb-4">Follow Us</h4>
                <div class="flex space-x-4">
                  <a href="#" class="w-12 h-12 bg-neutral-700 rounded-lg flex items-center justify-center text-neutral-400 hover:bg-green-500 hover:text-white transition-all duration-300" data-accent-hover>
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" class="w-12 h-12 bg-neutral-700 rounded-lg flex items-center justify-center text-neutral-400 hover:bg-green-500 hover:text-white transition-all duration-300" data-accent-hover>
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="#" class="w-12 h-12 bg-neutral-700 rounded-lg flex items-center justify-center text-neutral-400 hover:bg-green-500 hover:text-white transition-all duration-300" data-accent-hover>
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.404-5.965 1.404-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.888-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                    </svg>
                  </a>
                  <a href="#" class="w-12 h-12 bg-neutral-700 rounded-lg flex items-center justify-center text-neutral-400 hover:bg-green-500 hover:text-white transition-all duration-300" data-accent-hover>
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                </div>
              </div>

              <!-- Quick Stats -->
              <div class="grid grid-cols-2 gap-6">
                <div class="text-center">
                  <div class="text-2xl font-bold text-green-400 mb-1" data-accent-text>500+</div>
                  <div class="text-sm text-neutral-400">Active Machines</div>
                </div>
                <div class="text-center">
                  <div class="text-2xl font-bold text-green-400 mb-1" data-accent-text>98%</div>
                  <div class="text-sm text-neutral-400">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Footer Bottom -->
      <div class="border-t border-neutral-700 py-8">
        <div class="container-lg mx-auto px-4">
          <div class="flex flex-col md:flex-row justify-between items-center">
            <div class="text-neutral-400 mb-4 md:mb-0">
              © 2024 VendTech Solutions. All rights reserved.
            </div>
            <div class="flex space-x-6 text-sm">
              <a href="#" class="text-neutral-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" class="text-neutral-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" class="text-neutral-400 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  firstName = signal<string>('');
  lastName = signal<string>('');
  email = signal<string>('');
  phone = signal<string>('');
  investmentRange = signal<string>('');
  message = signal<string>('');
  isSubmitting = signal<boolean>(false);
  submitStatus = signal<'success' | 'error' | null>(null);

  onSubmit(event: Event) {
    event.preventDefault();
    
    if (!this.firstName() || !this.lastName() || !this.email()) {
      return;
    }

    this.isSubmitting.set(true);
    this.submitStatus.set(null);

    // Simulate form submission
    setTimeout(() => {
      // In a real app, you would make an HTTP request here
      console.log('Form submitted:', {
        firstName: this.firstName(),
        lastName: this.lastName(),
        email: this.email(),
        phone: this.phone(),
        investmentRange: this.investmentRange(),
        message: this.message()
      });

      this.isSubmitting.set(false);
      this.submitStatus.set('success');

      // Clear form
      this.firstName.set('');
      this.lastName.set('');
      this.email.set('');
      this.phone.set('');
      this.investmentRange.set('');
      this.message.set('');

      // Clear success message after 5 seconds
      setTimeout(() => this.submitStatus.set(null), 5000);
    }, 2000);
  }
}