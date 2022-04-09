# schedule-app

Angular: 13.2.7
<br>
Angular CLI: 13.2.6
<br>
Node: 16.14.0
<br>
Package Manager: npm 8.3.1
<br>
Unity tests: Jasmine, Karma
<br>
CSS pattern: BEM methodology

## Get started

### Clone the repo

```shell
git clone https://github.com/balini/schedule-app.git (HTTPS) 
git@github.com:balini/schedule-app.git (SSH) 
gh repo clone balini/schedule-app (GitHub CLI)
cd schedule-app/src/app
```

### Install npm packages and depedencies

```shell
npm install
```

### Run API Mock (Json server)

```shell
npm run mock
```

Mock API: GET http://localhost:3000/schedule

### Run application

```shell
npm start
```
Local application: http://localhost:4200

### Run unity tests  and test coverage report 

```shell
npm test
```

Minimum coverage of 70% of all tests scenarios:

karma.conf.js
```shell
 check: {
        global: {
          statements: 70,
          branches: 70,
          functions: 70,
          lines: 70
        }
      }
```

