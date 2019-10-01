# mtg-fetch

> Magic: The Gathering Card Database

## Firebase Setup
Create a .env file in the project root and fill in these variables from the Firebase console.
``` bash
# Firebase keys when creating a firebase project
FIREBASE_API_KEY=
FIREBASE_AUTH_DOMAIN=
FIREBASE_DATABASE_URL=
FIREBASE_PROJECT_ID=
FIREBASE_STORAGE_BUCKET=
FIREBASE_MESSAGING_SENDER_ID=
FIREBASE_APP_ID=
```

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build
$ npm run build

# Import card data into Firebase
$ npm run import
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Resources
* https://mtgjson.com/
