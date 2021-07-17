const Paseto = require("paseto.js");

const message = "My name is Youcef Abdellani";
let choise = 2;
// first pattern
switch (choise) {
  case 0:
    const sk = new Paseto.SymmetricKey(new Paseto.V2()); // if protocol is omitted, defaults to `new Paseto.V2()`
    sk.generate()
      .then(() => {
        const encoder = sk.protocol();
        return encoder.encrypt(message, sk);
      })
      .then((result) => {
        console.log(result);
        const decoder = sk.protocol();
        return decoder.decrypt(result, sk);
      })
      .then((result) => {
        console.log(result);
      });
    break;

  case 1:
    // first pattern alt
    const encoder = new Paseto.V2();
    const sk1 = new Paseto.SymmetricKey(encoder);
    sk1
      .generate()
      .then(() => {
        return encoder.encrypt(message, sk1);
      })
      .then((result) => {
        console.log(result);
        return encoder.decrypt(result, sk1);
      })
      .then((result) => {
        console.log(result);
      });
    break;

  case 2:
    const youcef = async (sentence) => {
      const protocol = new Paseto.V2();
      const key = new Paseto.SymmetricKey(protocol);
      console.log("Key is \n", key);
      await key.generate();
      console.log("Key generated is :\n", key);
      const crypted = await protocol.encrypt(sentence, key);
      console.log(crypted);
      const clear = await protocol.decrypt(crypted, key);
      console.log(clear);
    };
    youcef(message);
    break;
  default:
    // second pattern
    const encoder1 = new Paseto.V2();
    let key = 0;
    encoder1
      .symmetric()
      .then((sk) => {
        console.log(sk);
        key = sk;
        return encoder1.encrypt(message, sk);
      })
      .then((result) => {
        console.log(result);
        return encoder1.decrypt(result, key);
      })
      .then((result) => {
        console.log(result);
      });
    break;
}
