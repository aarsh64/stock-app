// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import * as firebase from 'firebase/app';
import { config } from 'rxjs';

export const environment = {
  production: false,
  FID_API:'brjvrqvrh5r9g3otgpq0',
  firebase:{
    apiKey: "AIzaSyAgKP9X7PwnLuI_ohzLjd3wmo2SOM6aBLo",
    authDomain: "stockapp-78c03.firebaseapp.com",
    databaseURL: "https://stockapp-78c03.firebaseio.com",
    projectId: "stockapp-78c03",
    storageBucket: "stockapp-78c03.appspot.com",
    messagingSenderId: "598587359274",
    appId: "1:598587359274:web:fb5cfb498d8253cfef8353",
    measurementId: "G-CVZ246YDC6"
  }
  };
 


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
