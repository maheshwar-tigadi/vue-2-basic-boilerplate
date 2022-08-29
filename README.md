# VueJS 2 Vue Router basic store - Basic Project Skeleton

## Getting started

This is a basic VueJs 2 and Vue Router skeleton written on JavaScript using promise via axio. Great for building a starter web app.

This project is created to help other developers create a **basic VueJS app in an easy way**. This basic example shows how powerful and simple JavaScript and VueJS can be.

## Features

*   Multiple environment ready (development, production).
*   Vue router
*   i18n ready.
*   Ready to add to home screen in iOS and Chrome, checks if there´s an app update every 2 hours and reloads page (When a web app is added as stand alone there´s no reload button in the browser so new .js files from a new build never get loaded)
*   Landing page.
*   Protected home page.
*   Login.
*   Register.
*   Forgot password.
*   Testing with Cypress and mocha/chai.
*   NPM script for keeping good source code formatting using prettier and ESLint.
*   Use of ESLint for good coding practices.
*   Use of prettier for beautiful format.
*   Ability to refresh token

## How to install

### Using Git (recommended)

1.  Clone the project from github. Change "myproject" to your project name.

```bash
git clone https://github.com/maheshwar-tigadi/vue-2-basic-boilerplate.git ./myproject
```

### Using manual download ZIP

1.  Download repository
2.  Uncompress to your desired directory

### Install npm dependencies after installing (Git or manual download)

```bash
cd myproject
npm install
npm update
```

## VERY IMPORTANT

This project uses Vue Router HTML5 History Mode, this means when you are in development mode you can hit Cmd+R (mac) or F5 (Windows) to reload the page and it will work, but when the project is built you will have problems, so will need to do a small change in your web server to make that work. Please read the official Vue Router documentation here: <https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations>

### Compiles and hot-reloads for development

```bash
npm run serve
```

### Compiles and minifies for production

```bash
npm run build
```

### Run your tests

```bash
npm run test
```

### Lints and fixes files

```bash
npm run lint
```

### Run your end-to-end tests

```bash
npm run test:e2e
```

### Run your unit tests

```bash
npm run test:unit
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Bugs or improvements

Feel free to report any bugs or improvements. Pull requests are always welcome.

## License

This project is open-sourced software licensed under the MIT License. See the LICENSE file for more information.
