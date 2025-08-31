
import { Injectable } from '@angular/core';
import * as Toast from 'nativescript-toast';
const messaging = require('@nativescript/firebase').messaging;

@Injectable({ providedIn: 'root' })
export class FirebaseService {
  private initialized = false;

  async initAndGetToken(): Promise<string | null> {
    if (!this.initialized) {
      try {
        await messaging().registerDeviceForRemoteMessages();
        this.initialized = true;
      } catch (e) {
        console.log('Error inicializando Firebase messaging', e);
      }
      try {
        messaging().onMessage((message: any) => {
          const body = (message?.notification && (message.notification.body || message.notification.title)) || JSON.stringify(message);
          Toast.makeText(`Notificación: ${body}`, 'short').show();
        });
      } catch (e) {
        console.log('No se pudo registrar onMessage', e);
      }
    }
    try {
      const token = await messaging().getToken();
      return token || null;
    } catch (e) {
      console.log('No se pudo obtener token FCM', e);
      return null;
    }
  }
}
