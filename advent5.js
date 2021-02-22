const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let maxSeatId = 0
let seats = []

rl.prompt();
console.log('Cltr + D to end inputing and get result')

rl.on('line', d=>getInputLine(d));

rl.on('close', cmd=>init());

function getInputLine(d) {
  if(!d)
    return
  let rowStart = 0
  let rowEnd = 127
  let colStart = 0
  let colEnd = 7

  for(let i=0; i<d.length; i++) {
    let c = d[i]
    if (i<7) {
      if(c=='F') {
        rowEnd = rowStart + (rowEnd - rowStart + 1) * 0.5 - 1
      } else if(c=='B') {
        rowStart = rowStart + (rowEnd - rowStart + 1) * 0.5
      } else {
        break
      }
    } else {
      if(c=='L') {
        colEnd = colStart + (colEnd - colStart + 1) * 0.5 - 1
      } else if(c=='R') {
        colStart = colStart + (colEnd - colStart + 1) * 0.5
      } else {
        break
      }
    }   
  }
  
  let s = {
    row: rowStart,
    col: colStart,
    seatId: rowStart * 8 + colStart
  }
  
  if(seats.length == 0)
    seats.push(s)
  else if(seats.length == 1) {
    if(s.seatId < seats[0].seatId)
      seats.unshift(s)
    else
      seats.push(s)
  } else if(s.seatId > seats[seats.length-1])
    seats.push(s)
  else {
    for(let j=0; j<=seats.length-1; j++) {
      if(s.seatId <= seats[j].seatId) {
        seats.splice(j, 0, s)
        break
      }
    } 
  }
}

function getMissingSeat(data) {
  for (let j=0; j<data.length-1; j++) {
    if(data[j+1].seatId - data[j].seatId != 1)
      console.log(data[j].seatId, data[j+1].seatId)
  }
}

function init() {
  getMissingSeat(seats)
  process.exit(0);
};

