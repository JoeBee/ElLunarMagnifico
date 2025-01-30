import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-splash',
  template: `
    <div class="splash-container">
      <img src="assets/OctopusMoon.jpg" alt="Logo">
      <h1 class="shooting-text">La Luna Magnifica</h1>
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

    .shooting-text {
      position: relative;
      z-index: 2;
      font-size: 3em;
      font-weight: bold;
      animation: shootingStar 2s ease-out forwards,
                 colorChange 2s linear infinite,
                 textGrow 2s ease-out forwards;
      opacity: 0;
      background: linear-gradient(
        90deg,
        #ff0000,
        #ffa500,
        #ffff00,
        #00ff00,
        #0000ff,
        #4b0082,
        #8f00ff
      );
      background-size: 200% auto;
      color: transparent;
      -webkit-background-clip: text;
      background-clip: text;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }

    @keyframes shootingStar {
      0% {
        transform: translate(-100vw, 50vh) rotate(-30deg);
        opacity: 0;
      }
      20% {
        opacity: 0.3;
      }
      50% {
        opacity: 0.7;
      }
      100% {
        transform: translate(0, 0) rotate(0deg);
        opacity: 1;
      }
    }

    @keyframes colorChange {
      0% {
        background-position: 0% 50%;
      }
      100% {
        background-position: 200% 50%;
      }
    }

    @keyframes textGrow {
      0% {
        font-size: 1em;
      }
      50% {
        font-size: 2em;
      }
      100% {
        font-size: 4em;
      }
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