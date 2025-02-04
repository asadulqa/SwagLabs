# SAUCEDEMO AUTOMATION PROJECT 

## Prerequisites
Before setting up the project, ensure you have the following installed:

- **Node.js** v22.12.0
- **npm** v10.9.0
- **Google Chrome** (latest version)
- **Allure Commandline** (optional, for generating test reports)

### Verify Installations
Run the following commands to check if the required dependencies are installed:

```sh
node -v   # Verify Node.js version
npm -v    # Verify npm version
```

## Installation & Setup

### 1. Install Dependencies
```sh
npm install
```

### 2. Configure WebDriverIO
Modify `wdio.conf.js` as needed for your test setup. Ensure browser capabilities are correctly defined:

```js
capabilities: [
  {
    browserName: "chrome",
    "goog:chromeOptions": {
      args: ["--disable-extensions"],
    },
  },
],
```

## Running Tests

### Run All Tests
```sh
npm run test
```

### Run a Specific Test File
```sh
npx wdio wdio.conf.js --spec ./test/specs/testq1.spec.js
```

## Generating and Viewing Allure Report

### 1. Generate the Report
```sh
npm run getreport
```

### 2. Open the Report
```sh
allure serve allure-results
```

## Troubleshooting

### 1. WebDriverIO Command Not Recognized?
Run WebDriverIO using `npx`:
```sh
npx wdio wdio.conf.js
```

### 2. Allure Command Not Found?
Install Allure globally:
```sh
npm install -g allure-commandline
```

## Contributing
Feel free to contribute by submitting issues or pull requests. Follow the established coding guidelines and best practices.

## Autho
Md Asadul Haque

Batch -08

Github : https://github.com/asadulqa

Linkedin profile :https://www.linkedin.com/in/md-asadul-haque-80b2072b3/

Email : mdasadul.qa@gmail.com

