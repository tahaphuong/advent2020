const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.prompt();
console.log('Cltr + D to end inputing and get result')

rl.on('line', d=>getInputLine(d));

rl.on('close', cmd=>init());

let data = []

function getInputLine(d) {
  if(d)
    data.push(parseInt(d))
}

let x1 = 0
let x3 = 0

function exe() {
  data.sort((a,b) => a-b)
  data.unshift(0)
  let charger = data[data.length-1] + 3
  data.push(charger)
  for(let i=0; i<data.length-1; i++) {
    switch (data[i+1] - data[i]) {
      case 1:
        x1 += 1
      break
      case 3: 
        x3 += 1
      break 
    }
  }
}

function init() {
  exe()
  console.log('x1', x1)
  console.log('x3', x3)
  console.log(data.length)
  console.log(x1*x3)

  process.exit(0);
}