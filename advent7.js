const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.prompt();
console.log('Cltr + D to end inputing and get result')

rl.on('line', d=>getInputLine(d));

rl.on('close', cmd=>init());

let data = {}
let res2 = 0
let mine = 'shiny gold'

function getInputLine(d) {
  if(!d)
    return
  
  let arr = d.split('contain')

  let left = arr[0].trim()
  left = left.substring(0, left.length-4).trim()

  let right = {}

  if(arr[1].trim() != 'no other bags.') {
    let rightArr = arr[1].trim().split(',')
    for(let i=0; i<rightArr.length; i++) {
      let a = rightArr[i].trim().split(' ')
      let num = parseInt(a[0])

      a.pop()
      a.shift()

      right[a.join(' ')] = num
    }
  }

  data[left] = right
}

function countBags(data, bag, count) {
  if(!data[bag])
    return
  for(let b in data[bag]) {
    res2 = res2 + (data[bag][b] * count)
    countBags(data, b, data[bag][b] * count)
  }
}

function init() {
  console.log(data)
  countBags(data, mine, 1)
  console.log('res', res2)
  process.exit(0);
}

// Part 1

// function getInputLine(d) {
//   if(!d)
//     return
  
//   let arr = d.split('contain')

//   let left = arr[0].trim()
//   left = left.substring(0, left.length-4).trim()

//   let right = []

//   if(arr[1].trim() != 'no other bags.') {
//     right = arr[1].trim().split(',')
//     for(let i=0; i<right.length; i++) {
//       let a = right[i].trim().split(' ')

//       a.pop()
//       a.shift()
//       right[i] = a.join(' ')
//     }
//   }

//   data[left] = right
// }

// let res = 0
// let pending = []

// function findColors(data, currentColor) {
//   for(let key in data) {
//     if(data[key].includes(currentColor) && !pending.includes(key)) {
//       res += 1
//       pending.push(key)
//       findColors(data, key)
//     }
//   }
// }

// function init() {
//   findColors(data, mine)
//   console.log('res', res)
//   process.exit(0);
// }