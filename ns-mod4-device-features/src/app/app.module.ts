
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from '@nativescript/angular';
import { AppComponent } from './app.component';
import { FirebaseService } from './services/firebase.service';

// Registrar MapView
const { registerElement } = require('@nativescript/angular');
registerElement('MapView', () => require('@nativescript/google-maps-sdk').MapView);

@NgModule({
  declarations: [AppComponent],
  imports: [NativeScriptModule],
  providers: [FirebaseService],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
