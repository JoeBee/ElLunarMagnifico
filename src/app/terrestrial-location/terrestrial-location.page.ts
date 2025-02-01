import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
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
  isMapInitialized = false;
  markerLibrary: any;

  mapOptions: google.maps.MapOptions = {
    mapTypeId: 'roadmap',
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: false,
    gestureHandling: 'greedy',
    draggable: true,
    clickableIcons: true,
    streetViewControl: true,
    fullscreenControl: true,
    mapTypeControl: true,
    rotateControl: true,
    scaleControl: true,
    panControl: true,
    mapId: 'DEMO_MAP_ID' // Required for AdvancedMarkerElement
  };

  constructor(private ngZone: NgZone) {}

  async ngOnInit() {
    await this.waitForMapsToLoad();
    // Load the marker library
    this.markerLibrary = await google.maps.importLibrary("marker") as any;
    
    try {
      const coordinates = await Geolocation.getCurrentPosition();
      this.ngZone.run(() => {
        this.center = {
          lat: coordinates.coords.latitude,
          lng: coordinates.coords.longitude
        };
        this.isMapInitialized = true;
      });
    } catch (error) {
      console.error('Error getting location:', error);
      this.center = { lat: 0, lng: 0 };
    }
  }

  private waitForMapsToLoad(): Promise<void> {
    return new Promise((resolve) => {
      if (window.google && window.google.maps) {
        resolve();
      } else {
        window.addEventListener('google-maps-ready', () => resolve());
      }
    });
  }

  onMapClick(event: google.maps.MapMouseEvent) {
    if (event.latLng) {
      this.ngZone.run(() => {
        this.savedLocation = {
          lat: event.latLng!.lat(),
          lng: event.latLng!.lng(),
          timestamp: new Date()
        };
        console.log('Map clicked:', this.savedLocation);
      });
    }
  }
}