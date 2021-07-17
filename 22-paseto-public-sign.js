const Paseto = require("paseto.js");

const message = "My name is Youcef Abdellani";
//let choise = 2;
// first pattern

const youcef = async (sentence) => {
  const signer = new Paseto.V2();
  const verifier = signer;
  const sk = new Paseto.PrivateKey(signer);
  console.log(sk);
  await sk.generate();
  console.log(sk);
  const signed = await signer.sign(sentence,sk);
  console.log(signed);
  const pk = await sk.public();
  console.log("public key", pk);
  const unsigned = await signer.verify(signed,pk);
  console.log(unsigned);
};

youcef(message);
