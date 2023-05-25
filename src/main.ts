import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const firebaseConfig = {
  apiKey: "AIzaSyDCMKMk7BWVGOcu5UAVk6YvWv3AD32pra4",
  authDomain: "my-accountant-2023.firebaseapp.com",
  projectId: "my-accountant-2023",
  storageBucket: "my-accountant-2023.appspot.com",
  messagingSenderId: "1071977839889",
  appId: "1:1071977839889:web:16f465cd4be94d0ac260b0",
  measurementId: "G-GT6PHJPZD2"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
