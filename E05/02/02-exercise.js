// Import the userModule
const userModule = require('./userModule');

// Use functions and constant from the module
const name = userModule.getName();
const location = userModule.getLocation();
const birthday = userModule.BIRTHDAY;

// Print information to the console
console.log(`${name} lives in ${location} and was born on ${birthday}.`);
