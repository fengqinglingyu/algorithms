const readline = require('readline');

// readline
//   .createInterface({
//     input: process.stdin,
//     output: process.stdout
//   })
//   .on('line', line => {
//     console.log(line.split(' '));
//   });

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const query = query =>
  new Promise(resolve => rl.question(query, answer => resolve(answer)));

(async () => {
  const input = await query('1 + 1 = ?');
  if (Number(input) === 2) {
    console.log('Right');
  } else {
    console.log('Not Right');
  }
  rl.close();
})();
