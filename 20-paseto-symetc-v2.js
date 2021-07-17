const Paseto = require('paseto.js');

const encoder = new Paseto.V2();
encoder.symmetric()
  .then(sk => {
    // (sk instanceof Paseto.SymmetricKey) -> true
    const message = 'A screaming comes across the sky.'
    console.log(sk);
    return encoder.encrypt(message, sk);
  })
  .then(token => {
    console.log(token);
    // v2.local.kBENRnsihCbu2p2th-ilYwA8Sr9xj4YVcdc1Qftzmi4sFn0r5aGsq0ptcwuKldLzqzqziRUtC0Llc8vP28mq6aRxKtJKJZB9Lw
  });
