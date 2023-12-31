# WebdriverIO task
## Summary
This is repository for WebdriverIO task.  
[Tested website repository](https://github.com/cypress-io/cypress-realworld-app)  
[Test cases list](https://docs.google.com/spreadsheets/d/16pzXPY60GEV18tnWzdgXe7tZ1Ri-5TxnpXZpKk4XfqA/edit?usp=sharing)  
[Report from latest pipeline run](https://derherrmannelig.github.io/wdio-task/index.html)  
## Requirements
[Node LTS](https://nodejs.org/) (18.14.2 or higher)  
[Java](https://www.oracle.com/java/technologies/downloads/#java8) (8 or higher)  
## Installation
1. Follow instructions from [this page](https://learn.cypress.io/real-world-examples/cypress-real-world-app-overview) to get running tested website locally;
2. Clone this repo, run `npm install`;
3. You're good to go!
## Tests launch
There are multiple launch options:
1. `npm run wdio:chrome` — run all tests in Chrome, reporter: Allure;
2. `npm run wdio:firefox` — run all tests in Firefox, reporter: Allure;
3. `npm run wdio:edge` — run all tests in Edge, reporter: Allure;
4. `npm run wdio:headless` — run all tests in Chrome in headless mode, reporter: Allure;
5. `npm run wdio:spec *any file from specs folder*` — run single specific test in Chrome, reporter: spec.
## Known issues:
- ~~For some reason, during pipeline run tests can't access tested website.~~ Fixed.
## To submit a bug report:
Navigate into **Issues** tab, click on "**New issue**" button. Follow this template:
1. Title;
2. Description;
3. Steps to reproduce;
4. Expected behavior;
5. Actual behavior;
6. Screenshots;
7. Additional details.
