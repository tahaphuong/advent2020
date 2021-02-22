const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.prompt();
console.log('Cltr + D to end inputing and get result')

rl.on('line', d=>getInputLine(d))

rl.on('close', cmd=>init())

let data = []
let arr = []
let counter = 0
let sum = 0
let firstLine = true

function getInputLine(d) {
  if(d) {
    if(firstLine) {
      for (let c of d) {
        if(!arr.includes(c))
        arr.push(c) 
      }
    } else {
      let arr2 = []
      for (let c of d) {
        if(arr.includes(c))
        arr2.push(c) 
      }
      arr = arr2 
    }
    
    firstLine = false
  } else {
    sum += arr.length
    arr = []
    counter += 1
    firstLine = true
  }
}

function init() {
  console.log(sum)
  process.exit(0);
}