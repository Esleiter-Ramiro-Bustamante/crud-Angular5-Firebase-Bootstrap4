// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey:  "AIzaSyC3Hv7HNa2j-g4pgbB-Z1QObcKKxlAtUFQ",
    authDomain: "angular-crudfirebase.firebaseapp.com",
    databaseURL: "https://angular-crudfirebase.firebaseio.com",
    projectId: "angular-crudfirebase",
    storageBucket: "angular-crudfirebase.appspot.com",
    messagingSenderId: "722694667782"
  }
};
