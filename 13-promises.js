const { readFile, writeFile } = require('fs').promises;
// const util = require('util');

// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async () => {
  try {
    // const first = await readFilePromise('./content/first.txt', 'utf8');
    // const second = await readFilePromise('./content/second.txt', 'utf8');
    const first = await readFile('./content/first.txt', 'utf8');
    const second = await readFile('./content/second.txt', 'utf8');
    // await writeFilePromise()
    await writeFile('./content/result-grenade-mind.txt',`This is awesome
${first}
${second}`);
    console.log(first);
  } catch (error) {
    console.log(error);
  }
}

start();

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf8', (err, data) => {
//       if (err) {
//         reject(err);
//       }
//       else {
//         resolve(data);
//       }
//     });
//   });
// };
// getText('./content/first.txt')
// .then((result) => console.log(result))
// .catch((err) => console.log(err));