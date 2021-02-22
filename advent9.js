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
let num = 542529149

function getInputLine(d) {
  if(!d)
    return
  let num = parseInt(d)
  data.push(num)
}

function exe() {
  let sum = 0

  let end = data.length - 1

  for(let i=data.length-1; i>=0; i--) {
    sum += data[i]
    console.log('sum', sum)
    if(num - sum<0) {
      sum -= data[end]
      end -= 1
    } else if(num - sum == 0) {
      let small = data[i]
      let large = data[i]

      for(let j=i; j<=end; j++) {
        if(data[j] < small)
          small = data[j]
        if(data[j] > large)
          large = data[j]
      }

      console.log(small + large)
      return 
    } 
  }
}

function init() {
  exe()
  process.exit(0);
}