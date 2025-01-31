import { Component, OnInit } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { GoogleMapsModule } from '@angular/google-maps';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-terrestrial-location',
  template: `
    <ion-content>
      <google-map height="100vh" width="100%"
        [center]="center"
        [zoom]="zoom">
        <map-marker [position]="center"></map-marker>
      </google-map>
    </ion-content>
  `,
  styles: [`
    google-map {
      display: block;
      width: 100%;
      height: 100vh;
    }
  `],
  standalone: true,
  imports: [IonContent, GoogleMapsModule]
})
export class TerrestrialLocationPage implements OnInit {
  center: google.maps.LatLngLiteral = {lat: 0, lng: 0};
  zoom = 15;

  async ngOnInit() {
    const coordinates = await Geolocation.getCurrentPosition();
    this.center = {
      lat: coordinates.coords.latitude,
      lng: coordinates.coords.longitude
    };
  }
}
