import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { HowItWorksComponent } from '../../components/how-it-works/how-it-works.component';
import { VendingMachinesComponent } from '../../components/vending-machines/vending-machines.component';
import { EarningsCalculatorComponent } from '../../components/earnings-calculator/earnings-calculator.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    HowItWorksComponent,
    VendingMachinesComponent,
    EarningsCalculatorComponent,
    FooterComponent
  ],
  template: `
    <div class="min-h-screen">
      <app-header />
      <app-hero />
      <app-how-it-works />
      <app-vending-machines />
      <app-earnings-calculator />
      <app-footer />
    </div>
  `
})
export class HomeComponent {

}