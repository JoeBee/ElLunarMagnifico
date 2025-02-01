import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-la-luna',
  templateUrl: './la-luna.page.html',
  styleUrls: ['./la-luna.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    FormsModule
  ]
})
export class LaLunaPage {
  testInput = '';
  headerInput = '';
}
