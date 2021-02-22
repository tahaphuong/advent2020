const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let data = []
let counter = 0
let countValid = 0
let countEntries = 0

rl.prompt();
console.log('Cltr + D to end inputing and get result')

rl.on('line', d=>getInputLine(d));

rl.on('close', cmd=>init());

function getInputLine(d) {
  if(d) {
    if(data[counter]) {
      data[counter] = data[counter].trim() + " " + d.trim()
    } else {
      data.push(d)
    }
  } else {
    if(data[counter]) {
      countEntries += 1
      let arr = data[counter].split(" ")
      arr = arr.map(e => e.split(":"))
  
      if(validate(arr)) {
        countValid += 1
      }
      counter += 1
    }
    
  }
}

function validate(arr) {
  let check = true
  let field = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']
  console.log(arr)

  myloop:
  for (let e of arr) {
    if(e[0] != 'cid') {
      let i = field.indexOf(e[0])
      if(typeof(i) == 'number') {        
        field[i] = validateData(e[0], e[1])
      } else {
        check = false
        break myloop
      }
    }
  }

  console.log(field)
  if(check) {
    myloop2:
    for(let el of field) {
      if(el != true) {
        check = false
        break myloop2
      }
    }
  }

  return check
}
const hexCode = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

const eyeColor = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth']
function validateData(f, d) {
  console
  switch (f) {
    case 'byr':
      return parseInt(d) >= 1920 && parseInt(d) <= 2002
    case 'iyr':
      return parseInt(d) >= 2010 && parseInt(d) <= 2020
    case 'eyr':
      return parseInt(d) >= 2020 && parseInt(d) <= 2030
    case 'hgt':
      let unit = d.substring(d.length-2, d.length)
      let num = parseInt(d.substring(0, d.length-2))
      if(unit == 'cm')
        return num >= 150 && num <= 193
      else if (unit == 'in')
        return num >= 59 && num <= 76
      return false
    case 'hcl':
      console.log(d[0], d)
      if(d[0] != '#')
        return false
      for(let c of d.substring(1, d.length)) {
        if(!hexCode.includes(c)) {
          return false
        }
      }
      return true
    case 'ecl':
      return eyeColor.includes(d)
    case 'pid':
      for(let c of d) {
        if(!digits.includes(c)) {
          return false
        }
      }
      if (d.length != 9) {
        return false
      }
      return true
    default: 
      return false
  }
}

function init() {
  console.log(countValid)
  console.log('count entry', countEntries)

  process.exit(0);
};