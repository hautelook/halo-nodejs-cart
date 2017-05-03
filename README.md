# NodeJS E-commerce Cart Sample

This cart sample includes Cucumber tests and Plain Old JavaScript Objects (POJOs) that model the functionality of a basic shopping cart.

## Requirements

* [Node.js](http://nodejs.org)
* [NPM](http://npmjs.org)

## Installation

   * Make sure you have a working internet connection. You will need npm to download the dependencies.
   * Install dependencies using `npm install`.

Note: We expect installation to take less than 5 Minutes to setup. If for any reason it is taking longer, please feel free to reach out to us. We are happy to [help](#support).

## Running Tests

After installation, go to the halo-nodjs-cart directory and make sure the tests are working:

```bash
$ ./node_modules/.bin/cucumber-js
```

The tests should complete without errors. The majority of the tests will be in a pending state.

## Code Layout

Here is a high level overview of the important files in this project:

   * `features/cart.feature` - the gherkin language that describes scenarios (tests cases) for the sample cart code.
   * `features/step_definitions/cart_steps.js` - the file that parses the above `cart.feature` and executes tests.
   * `models/cart.js` - the sample cart class

You may need to add additional files or classes to complete the assignment, so feel free to use whatever editor your are most comfortable with to browse and edit them.

## Challenge

The first scenario has been written for you. Please implement the remaining scenarios in `cart.feature`. We are judging you on the design and the correctness of the code. Make whatever changes you want to the scenario implementations and source code to accomplish that goal. We are excited to see it! Zip up the directory and email it back to us. You can omit the `.git` creating the zip.

### Support

Need help? Please reach out to us! We know computers can be tricky things and we are happy to assist you. Our contact details are in the email we sent you. We will get back to you as soon as we can.
