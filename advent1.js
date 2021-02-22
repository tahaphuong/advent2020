const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let data = []

rl.prompt();
console.log('Cltr + D to end inputing and get result')

rl.on('line', function (d) {
  data.push(parseInt(d));
});

rl.on('close', cmd => {
  let sum2 = []
  for(let x of data) {
    sum2.push(2020-x)
  }
  loop1:
  for(let i=0; i<data.length; i++) {
    loop2:
    for(let j=0; i<sum2.length; j++) {
      let num = data.find((val,i)=>data.includes(sum2[j]-val) && j!=i)
      if(num) {
        console.log(num*(sum2[j]-num)*(2020-sum2[j]))
        break loop1
        break loop2
      }
    }
  }
  process.exit(0);
});