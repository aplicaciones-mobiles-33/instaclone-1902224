// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Initialize Firebase
//const app = initializeApp(firebaseConfig);
export const environment = {
  production: false
  firebaseConfig : {
    apiKey: "AIzaSyAOewMO4r3DkNSY0AiRRN3R1yD8jpB1h6U",
    authDomain: "insta-clone-app-e762f.firebaseapp.com",
    projectId: "insta-clone-app-e762f",
    storageBucket: "insta-clone-app-e762f.appspot.com",
    messagingSenderId: "213362547661",
    appId: "1:213362547661:web:a523917315437989370284"
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
