import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

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
      animation: fadeOut 11s ease-in forwards;
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
      animation: growText 8s ease-in forwards;
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

    @keyframes growText {
      from {
        font-size: 24px;
      }
      to {
        font-size: 192px;
      }
    }

    @keyframes fadeOut {
      0% {
        opacity: 1;
      }
      73% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  `],
  standalone: true,
  imports: [CommonModule]
})
export class SplashComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['tabs']);
    }, 11000); // 11 seconds total (8s display + 3s fade)
  }
} 