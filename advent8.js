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
  if(!d)
    return
  let arr = d.split(' ')
  arr[1] = parseInt(arr[1])

  data.push(arr)
}

let sum = 0
let passed = []
let looped = false

function exe(n) {
  if(!data[n])
    return 'yay'
  switch(data[n][0]) {
    case 'acc':
      if(passed.includes(n)) {
        looped = true
        return
      }
      sum += data[n][1]
      passed.push(n)
      exe(n+1)
    break
    case 'jmp':
      if(passed.includes(n)) {
        looped = true
        return
      }
      passed.push(n)
      exe(n+data[n][1])      
    break
    case 'nop':
      if(passed.includes(n)) {
        looped = true
        return
      }
      passed.push(n)
      exe(n+1)
    break
    default:
    break
  }
}

function init() {
  for(let i=0; i<data.length; i++) {
    if(data[i][0] == 'jmp' || data[i][0] == 'nop') {      
      let old = data[i]

      if(data[i][0] == 'jmp')
        data[i] = ['nop', data[i][1]]
      else 
        data[i] = ['jmp', data[i][1]]

      sum=0
      passed=[]
      looped = false
      exe(0)

      if(!looped)
        console.log('summmmmmmmm', sum)

      data[i] = old    
    }
  }

  process.exit(0);
}