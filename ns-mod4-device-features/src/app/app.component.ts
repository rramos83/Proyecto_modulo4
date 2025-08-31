
import { Component, OnInit } from '@angular/core';
import { ImageAsset, ImageSource } from '@nativescript/core';
import { FirebaseService } from './services/firebase.service';
import * as SocialShare from 'nativescript-social-share';
import * as Camera from '@nativescript/camera';

@Component({
  selector: 'ns-app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'Módulo 4 - Capacidades Nativas + Testing';
  fcmToken: string | null = null;
  captured?: ImageSource;

  constructor(private firebaseSvc: FirebaseService) {}

  async ngOnInit() {
    this.fcmToken = await this.firebaseSvc.initAndGetToken();
  }

  shareText() {
    SocialShare.shareText('Hola desde NativeScript – módulo 4!', 'Compartir texto');
  }

  async takePhotoAndShare() {
    await Camera.requestPermissions();
    const imageAsset: ImageAsset = await Camera.takePicture({ width: 1024, height: 768, keepAspectRatio: true, saveToGallery: true });
    const image = await ImageSource.fromAsset(imageAsset);
    this.captured = image;
  }

  shareCapturedImage() {
    if (this.captured) {
      SocialShare.shareImage(this.captured, 'Compartir foto');
    }
  }

  onMapReady(args: any) {
    const mapView = args.object as any;
    const { Marker, Position } = require('@nativescript/google-maps-sdk');
    const marker = new Marker();
    marker.position = Position.positionFromLatLng(14.072275, -87.192136);
    marker.title = 'Marker de ejemplo';
    marker.snippet = 'Proyecto Módulo 4';
    mapView.addMarker(marker);
  }
}
