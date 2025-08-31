
# Módulo 4 – Capacidades Nativas + Testing (NativeScript + Angular)

Este proyecto demuestra **capacidades nativas** del dispositivo y un **pipeline básico de pruebas** para cumplir con los requisitos del módulo.

## ✨ Checklist de lo solicitado (10/10)

1. **Token FCM de Firebase** visible en pantalla (archivo: `src/app/services/firebase.service.ts` y `app.component.html`).
2. **Toast** con el contenido de las **notificaciones entrantes** (Firebase Messaging -> `Toast.makeText(...)`).
3. **Social Share (texto)**: botón *“Compartir texto”* (`app.component.ts` → `shareText()`).
4. **Social Share (imagen)**: botón *“Compartir imagen”* (comparte la foto capturada).
5. **Camera**: toma de fotografía (`takePhotoAndShare()`), guarda en galería y carga en memoria.
6. **Compartir la imagen de cámara**: usa `nativescript-social-share` con `ImageSource`.
7. **Google Maps SDK** registrado con `registerElement`.
8. **Marker** agregado al mapa en `onMapReady()` (ejemplo en Tegucigalpa).
9. **Tests Jasmine** sobre un **reducer** simple (`src/app/store/counter.reducer.spec.ts`).
10. **Karma JUnit Reporter** configurado en `karma.conf.js`, genera `test-results/junit/test-results.xml`.

---

## 🧰 Requisitos previos
- Node.js 18+
- NativeScript CLI (`npm i -g nativescript`)
- Angular CLI (`npm i -g @angular/cli`)
- Chrome para ejecutar `ChromeHeadless` en tests

## 🚀 Instalación y ejecución
```bash
npm install
ns run android    # o: ns run ios
```

## 🔔 Configuración de claves (OBLIGATORIO)
### Firebase (FCM)
Coloca tus archivos reales de Firebase:
- Android → `App_Resources/Android/google-services.json`
- iOS → `App_Resources/iOS/GoogleService-Info.plist`

> El servicio `FirebaseService` se encarga de: registrar el dispositivo, obtener el **token** y escuchar **mensajes** (`onMessage`) para mostrar un **Toast**.

### Google Maps API Key
- Android → `App_Resources/Android/src/main/AndroidManifest.xml` (reemplaza `YOUR_ANDROID_MAPS_API_KEY`)
- iOS → `App_Resources/iOS/App_Resources_InfoPlist.xml` (reemplaza `YOUR_IOS_MAPS_API_KEY`)

## 🧪 Pruebas unitarias + Reporter JUnit
```bash
ng test --watch=false --browsers=ChromeHeadless
```
- Reporte JUnit: **`test-results/junit/test-results.xml`**
- Reducer probado: `src/app/store/counter.reducer.ts` (inc/dec/reset).

## 📁 Estructura rápida
```
src/app/
  app.component.ts / .html
  services/firebase.service.ts
  store/
    counter.actions.ts
    counter.reducer.ts
    counter.reducer.spec.ts
App_Resources/
  Android/google-services.json    (REEMPLAZAR con tu archivo)
  iOS/GoogleService-Info.plist    (REEMPLAZAR con tu archivo)
```

## 📝 Notas
- Dependencias usadas (plugins): `@nativescript/firebase`, `@nativescript/google-maps-sdk`, `@nativescript/camera`, `nativescript-social-share`, `nativescript-toast`.
- Si tu entorno usa versiones diferentes, ajusta importaciones según tu CLI.
- El mapa ya trae un marker de ejemplo; cambia lat/lon a tu preferencia.

---

## 🔍 Troubleshooting
- **No aparece token FCM**: revisa que copiaste el `google-services.json` / `GoogleService-Info.plist` correctos y que el paquete coincide.
- **No llegan notificaciones**: verifica en Firebase Console que estás usando el **token mostrado en pantalla**.
- **Google Maps en blanco**: confirma que la **API Key** tiene activado *Maps SDK for Android/iOS*.
- **`ng test` falla en headless**: asegúrate de tener Chrome instalado o cambia el launcher en `karma.conf.js`.
