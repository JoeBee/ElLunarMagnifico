import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-terrestrial-location',
  templateUrl: './terrestrial-location.page.html',
  styleUrls: ['./terrestrial-location.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    ExploreContainerComponent]
})
export class TerrestrialLocationPage {
  constructor() { }
}
