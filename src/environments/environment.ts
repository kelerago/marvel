// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: "https://gateway.marvel.com/v1/public",
  publicKey: "79e7b8adae23f0299c44052d94dc3900",
  pageLimit: 12,
  storageUserKey: 'marvel_user',
  firebaseConfig: {
    apiKey: "AIzaSyDBlhBUZTc5hO2nYDFankqMyzvwRPLea7k",
    authDomain: "aprendizaje-312202.firebaseapp.com",
    projectId: "aprendizaje-312202",
    storageBucket: "aprendizaje-312202.appspot.com",
    messagingSenderId: "467922578522",
    appId: "1:467922578522:web:208786f04182b270dbfc63"
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
