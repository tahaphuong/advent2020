const { SSL_OP_NO_SSLv2 } = require('constants');
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.prompt();
console.log('Cltr + D to end inputing and get result')

let data = []


rl.on('line', d=>getInputLine(d));

rl.on('close', cmd=>init());

let countLine = 0
let countValid = 0
let countValid1 = 0
let countValid5 = 0
let countValid7 = 0
let countValid2 = 0

let n = 0
let n1 = 0
let n5 = 0
let n7 = 0
let n2 = 0

function getInputLine(l) {
  countLine++
  let index = n%l.length == 0 ? l.length-1 : (n%l.length)-1
  let index1 = n1%l.length == 0 ? l.length-1 : (n1%l.length)-1 
  let index5 = n5%l.length == 0 ? l.length-1 : (n5%l.length)-1 
  let index7 = n7%l.length == 0 ? l.length-1 : (n7%l.length)-1 
  let index2 = n2%l.length == 0 ? l.length-1 : (n2%l.length)-1 


  if(n!=0 && l[index] == '#') {
    countValid++
  }
  if(n1!=0 && l[index1] == '#') {
    countValid1++
  }
  if(n5!=0 && l[index5] == '#') {
    countValid5++
  }
  if(n7!=0 && l[index7] == '#') {
    countValid7++
  }

  if (countLine != 1 && countLine%2==1) {
    if(n2!=0 && l[index2] == '#') {
      countValid2++
    }
    n2 += 1
  }
  
  n = n==0 ? n+4 : n+3
  n1 = n1==0 ? n1+2 : n1+1
  n5 = n2==0 ? n5+6 : n5+5
  n7 = n7==0 ? n7+8 : n7+7
  n2 = n2==0 ? n2+2 : n2
}

function init() {
  console.log(countValid, countValid1, countValid2, countValid5, countValid7)
  console.log(countValid * countValid1 * countValid2 * countValid5 * countValid7)

}