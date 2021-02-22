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

let countValid = 0

function getInputLine(d) {
  let arr = d.split(' ')
  let policy = arr[0].split('-').map(a=>parseInt(a))
  let c = arr[1][0]
  let password = arr[2]

  let p1 = policy[0] - 1
  let p2 = policy[1] - 1

  if ((c==password[p1] && c!=password[p2]) || (c!=password[p1] && c==password[p2]))
    countValid++
  
  // let count = 0;
  // for(let char of password) {
  //   if(char==c) {
  //     count++
  //   }
  // }
  // if(count>=policy[0] && count<=policy[1]) {
  //   countValid++
  // }

}
function init() {
  console.log(countValid)
}