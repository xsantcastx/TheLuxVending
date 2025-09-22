import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <footer id="contact" class="footer">
      <!-- Main Content -->
      <div class="section">
        <div class="container-lg">
          <div class="grid grid-md-2 gap-8">
            <!-- Contact Form -->
            <div>
              <h2 class="h2 mb-4">Check <span class="accent">eligibility</span></h2>
              <p class="text-soft mb-6">
                Ready to start earning? Tell us about your business and we'll create a custom proposal.
              </p>
              
              <form class="space-y-4" (ngSubmit)="onSubmit($event)">
                <div class="form-grid form-grid--2">
                  <div>
                    <label class="block font-semibold mb-2">First Name *</label>
                    <input 
                      type="text" 
                      [(ngModel)]="firstName"
                      name="firstName"
                      required
                      class="input"
                      placeholder="Your first name">
                  </div>
                  <div>
                    <label class="block font-semibold mb-2">Last Name *</label>
                    <input 
                      type="text" 
                      [(ngModel)]="lastName"
                      name="lastName"
                      required
                      class="input"
                      placeholder="Your last name">
                  </div>
                </div>
                
                <div>
                  <label class="block font-semibold mb-2">Email Address *</label>
                  <input 
                    type="email" 
                    [(ngModel)]="email"
                    name="email"
                    required
                    class="input"
                    placeholder="your@email.com">
                </div>
                
                <div>
                  <label class="block font-semibold mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    [(ngModel)]="phone"
                    name="phone"
                    class="input"
                    placeholder="(555) 123-4567">
                </div>
                
                <div>
                  <label class="block font-semibold mb-2">Business Type</label>
                  <select 
                    [(ngModel)]="businessType"
                    name="businessType"
                    class="select">
                    <option value="">Select your business type...</option>
                    <option value="gym">Gym/Fitness Center</option>
                    <option value="office">Office Building</option>
                    <option value="hotel">Hotel/Motel</option>
                    <option value="convenience">Convenience Store</option>
                    <option value="laundromat">Laundromat</option>
                    <option value="restaurant">Restaurant/Bar</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label class="block font-semibold mb-2">Location Details</label>
                  <textarea 
                    [(ngModel)]="message"
                    name="message"
                    class="textarea"
                    rows="4"
                    placeholder="Tell us about your location: daily foot traffic, hours, nearby businesses, etc."></textarea>
                </div>
                
                <button 
                  type="submit"
                  [disabled]="isSubmitting()"
                  class="btn btn--accent w-full">
                  @if (isSubmitting()) {
                    <span class="flex items-center justify-center">
                      <span class="animate-spin mr-2">⏳</span>
                      Sending...
                    </span>
                  } @else {
                    Check eligibility
                  }
                </button>
                
                @if (submitStatus()) {
                  <div class="text-center p-4 rounded-xl"
                       [class.bg-emerald-900/30]="submitStatus() === 'success'"
                       [class.text-emerald-400]="submitStatus() === 'success'"
                       [class.bg-red-900/30]="submitStatus() === 'error'"
                       [class.text-red-400]="submitStatus() === 'error'">
                    @if (submitStatus() === 'success') {
                      <p>✅ Thank you! We'll contact you within 24 hours to check your eligibility.</p>
                    } @else {
                      <p>❌ Something went wrong. Please try again or call us directly.</p>
                    }
                  </div>
                }

                <p class="form-note text-center">
                  * Free consultation • No obligation • Response within 24 hours
                </p>
              </form>
            </div>
            
            <!-- Company Info -->
            <div>
              <h3 class="h3 mb-6">TheLuxVending</h3>
              <p class="text-soft mb-6">
                Stamford's leading vending machine placement service. 
                We handle everything so you can focus on your business while earning passive income.
              </p>
              
              <!-- Contact Info -->
              <div class="space-y-4 mb-8">
                <div class="flex items-start gap-3">
                  <div class="accent-bg w-10 h-10 rounded-lg flex items-center justify-center mt-1">
                    <span>📍</span>
                  </div>
                  <div>
                    <h4 class="font-semibold mb-1">Service Area</h4>
                    <p class="text-soft small">
                      Stamford and surrounding areas
                    </p>
                  </div>
                </div>
                
                <div class="flex items-start gap-3">
                  <div class="accent-bg w-10 h-10 rounded-lg flex items-center justify-center mt-1">
                    <span>📞</span>
                  </div>
                  <div>
                    <h4 class="font-semibold mb-1">Phone</h4>
                    <p class="text-soft">
                      <a href="tel:+12039063603" class="hover:text-white transition-colors">(203) 906-3603</a><br>
                      <span class="form-note">Mon-Fri 9AM-6PM ET</span>
                    </p>
                  </div>
                </div>
                
                <div class="flex items-start gap-3">
                  <div class="accent-bg w-10 h-10 rounded-lg flex items-center justify-center mt-1">
                    <span>✉️</span>
                  </div>
                  <div>
                    <h4 class="font-semibold mb-1">Email</h4>
                    <p class="text-soft">
                      <a href="mailto:diego@TheLuxVending.com" class="hover:text-white transition-colors">diego@TheLuxVending.com</a><br>
                      <span class="form-note">Quick response guaranteed</span>
                    </p>
                  </div>
                </div>
              </div>

              <!-- FAQ Quick Items -->
              <div class="box">
                <h4 class="h3 mb-4">Quick FAQ</h4>
                <div class="space-y-3 small">
                  <div>
                    <strong>Q: What does it cost to get started?</strong><br>
                    <span class="text-soft">A: Nothing upfront. We provide and install everything.</span>
                  </div>
                  <div>
                    <strong>Q: How much can I earn monthly?</strong><br>
                    <span class="text-soft">A: Typically $150-600 per machine depending on traffic.</span>
                  </div>
                  <div>
                    <strong>Q: Do I need to maintain the machines?</strong><br>
                    <span class="text-soft">A: No - we handle all restocking, repairs, and maintenance.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Bottom Bar -->
      <div class="container-lg footer__row">
        <div>
          © 2024 TheLuxVending • All rights reserved.
        </div>
        <div class="footer__links">
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
          <a href="#contact">Contact</a>
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
  businessType = signal<string>('');
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
      console.log('Form submitted:', {
        firstName: this.firstName(),
        lastName: this.lastName(),
        email: this.email(),
        phone: this.phone(),
        businessType: this.businessType(),
        message: this.message()
      });

      this.isSubmitting.set(false);
      this.submitStatus.set('success');

      // Clear form
      this.firstName.set('');
      this.lastName.set('');
      this.email.set('');
      this.phone.set('');
      this.businessType.set('');
      this.message.set('');

      // Clear success message after 5 seconds
      setTimeout(() => this.submitStatus.set(null), 5000);
    }, 2000);
  }
}