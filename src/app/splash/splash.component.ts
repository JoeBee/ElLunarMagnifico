import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-splash',
  template: `
    <div class="splash-container">
      <img src="assets/OctopusMoon.jpg" alt="Logo">
      <h1>El Lunar Magnifico</h1>
    </div>
  `,
  styles: [`
    .splash-container {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: #ffffff;
      animation: fadeOut 1.5s ease-in-out forwards;
      animation-delay: 2s;
      overflow: hidden;
    }

    img {
      width: 100%;
      height: 100vh;
      object-fit: cover;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
    }

    h1 {
      position: relative;
      z-index: 2;
      color: white;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }

    @keyframes fadeOut {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
        visibility: hidden;
      }
    }
  `],
  standalone: true,
  imports: [CommonModule, IonContent]
})
export class SplashComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    // Navigate to main app after animation
    setTimeout(() => {
      this.router.navigate(['/tabs']);
    }, 3500); // 3.5 seconds (2s delay + 1.5s animation)
  }
} 