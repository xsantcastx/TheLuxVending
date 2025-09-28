import { Component, signal, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="top" class="hero">
      <div class="container-lg hero__grid">
        <div>
          <p class="xs text-muted">Local • Reliable • Hassle-Free</p>
          <h1 class="h1 mt-3">Own a business? <span class="accent"> <br>Turn a corner into steady income.</span></h1>
          <p class="mt-4 text-soft">We install & service <strong>ATMs, claw and vending machines</strong>. No upfront cost. No maintenance. <strong>You collect your share monthly.</strong></p>
          <div class="mt-6 flex gap-3">
            <a href="#contact" class="btn btn--accent">Check eligibility</a>
            <a href="#earn" class="btn btn--outline">See Earnings Examples</a>
          </div>
          <div class="mt-6 flex items-center gap-6 small text-muted">
            <div class="flex items-center gap-2"><span class="dot"></span>No Upfront Cost</div>
            <div class="flex items-center gap-2"><span class="dot"></span>Monthly Payouts</div>
            <div class="flex items-center gap-2"><span class="dot"></span>We Handle Everything</div>
          </div>
        </div>

        <div class="hero__side">
          <div class="hero__frame img-frame">
            <div class="carousel-simple" (mouseenter)="stopAutoplay()" (mouseleave)="startAutoplay()">
              <button class="carousel__nav left" (click)="prev()">◀</button>
              <div class="carousel-simple__stage">
                <img class="carousel-simple__img" [src]="images[index()]" [alt]="'Vending '+(index()+1)" loading="lazy" (click)="openLightbox(index())" />
              </div>
              <button class="carousel__nav right" (click)="next()">▶</button>
            </div>
          </div>

          <p class="xs text-muted mt-3">Click the image to expand.</p>
        </div>
      </div>

      <!-- Lightbox -->
      <div class="lightbox" [class.show]="lightboxOpen()">
        <div class="lightbox__backdrop" (click)="closeLightbox()"></div>
        <div class="lightbox__content">
          <button class="lightbox__close" (click)="closeLightbox()">✕</button>
          <img [src]="images[index()]" [alt]="'Vending large ' + (index()+1)" />
          <div class="lightbox__thumbnails">
            <img *ngFor="let img of images; let i = index" [src]="img" [attr.srcset]="img + ' 1x'" loading="lazy" [class.selected]="i === index()" (click)="index.set(i)" />
          </div>
        </div>
      </div>
    </section>
  `
})

export class HeroComponent implements OnDestroy {
  images = [
    '/assets/venidingMachines/1.png',
    '/assets/venidingMachines/2.png',
    '/assets/venidingMachines/3.png',
    '/assets/venidingMachines/4.png',
    '/assets/venidingMachines/5.png'
  ];

  index = signal<number>(0);
  lightboxOpen = signal<boolean>(false);
  autoplay = signal<boolean>(true);
  private autoplayInterval: any = null;

  constructor() {
    // start autoplay
    // Only start autoplay in the browser (avoid SSR errors)
    if (typeof window !== 'undefined') {
      this.startAutoplay();
    }
  }

  startAutoplay() {
    if (this.autoplayInterval) clearInterval(this.autoplayInterval);
    if (!this.autoplay()) return;
    this.autoplayInterval = setInterval(() => {
      const cur = this.index();
      this.index.set((cur + 1) % this.images.length);
    }, 5000); // advance every 5s
  }

  stopAutoplay() {
    if (this.autoplayInterval) { clearInterval(this.autoplayInterval); this.autoplayInterval = null; }
  }

  prev() {
    const cur = this.index();
    this.index.set((cur - 1 + this.images.length) % this.images.length);
  }

  next() {
    const cur = this.index();
    this.index.set((cur + 1) % this.images.length);
  }

  openLightbox(i: number) {
    this.index.set(i);
    this.lightboxOpen.set(true);
    // pause autoplay while lightbox is open
    this.stopAutoplay();
    // attach keydown handler
    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', this.onKeydown);
    }
  }

  closeLightbox() {
    this.lightboxOpen.set(false);
    if (typeof window !== 'undefined') {
      window.removeEventListener('keydown', this.onKeydown);
    }
    // resume autoplay
    this.startAutoplay();
  }

  ngOnDestroy(): void {
    // cleanup listeners and intervals when component is destroyed
    if (typeof window !== 'undefined') {
      try { window.removeEventListener('keydown', this.onKeydown); } catch {}
    }
    this.stopAutoplay();
  }

  onKeydown = (ev: KeyboardEvent) => {
    if (!this.lightboxOpen()) return;
    if (ev.key === 'ArrowLeft') { this.prev(); }
    if (ev.key === 'ArrowRight') { this.next(); }
    if (ev.key === 'Escape') { this.closeLightbox(); }
  }

}