const os = require('os');

// Informations about the current user
let user = os.userInfo();
console.log(user);

// method returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime} seconds`);

// Current OS information
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalmem: os.totalmem(),
  freemem: os.freemem(),
}

console.log(currentOS);