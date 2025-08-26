# Spikerz Assessment test execution instructions

## Setup and run instructions

1. **Clone the repository**

```bash
git clone https://github.com/chukwuemeka-uche/spikerz_assessment.git
```

2. **Install dependencies**

```bash
npm install
```

3. **Setup environment variables**
   Create a Cypress.env.json file in the root of the project directory and set the keys and appropriate values

```json
{
    "username": "enter username here",
    "password": "enter password here"
}
```

## Overview of architectural choices

- **Framework**: Cypress
- **Language**: Typescript
- **Design Pattern**: Page Object Model (POM) to manage elements and reduce code repetition
- **Custom Command**: cy.authUser to handle HTTP basic auth
- **Method Chaining**: To improve readability, efficiency and clean coding
- **Type declaration**: used index.d.ts to manage type declaration for commands.ts

## Instructions for running tests

1. **Open Test runner**
   Tests can be executed using the test runner and clicking on the spec in the runner

```bash
npx cypress open
```

2. **Run tests in headless mode**

```bash
npx cypress run
```

3. **Run test in headed mode using the custom test script in package.json**

```bash
npm run cy:test:e2e-headed
```

## Additional Notes

- Forced redirect from the YouTube page using a fakke return URL because Google authentication kept blocking access to the site causing a 403
- Bonus conditions for use of Typescript stated in the task were addressed
