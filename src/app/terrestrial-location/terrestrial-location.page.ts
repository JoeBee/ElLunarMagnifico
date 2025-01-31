import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMap, GoogleMapsModule } from '@angular/google-maps';
import { Geolocation } from '@capacitor/geolocation';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-terrestrial-location',
  templateUrl: './terrestrial-location.page.html',
  styleUrls: ['./terrestrial-location.page.scss'],
  standalone: true,
  imports: [GoogleMapsModule, CommonModule, IonContent, IonHeader, IonTitle, IonToolbar]
})
export class TerrestrialLocationPage implements OnInit {
  @ViewChild(GoogleMap) map!: GoogleMap;
  center: google.maps.LatLngLiteral = {lat: 0, lng: 0};
  zoom = 15;
  savedLocation: any = null;

  mapOptions: google.maps.MapOptions = {
    mapTypeId: 'roadmap',
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: false,
    gestureHandling: 'auto',
    draggable: true,
    clickableIcons: true,
    streetViewControl: true,
    fullscreenControl: true
  };

  async ngOnInit() {
    const coordinates = await Geolocation.getCurrentPosition();
    this.center = {
      lat: coordinates.coords.latitude,
      lng: coordinates.coords.longitude
    };
  }

  onMapClick(event: google.maps.MapMouseEvent) {
    if (event.latLng) {
      this.savedLocation = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
        timestamp: new Date()
      };
    }
  }
}