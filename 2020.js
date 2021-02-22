function find2020(a, b, c, d, e) {
  let arr = [a, b, c, d, e]
  for(let i=1; i<=2020; i++) {
    let x = Math.abs(arr[0]-arr[1])
    let y = Math.abs(arr[1]-arr[2])
    let z = Math.abs(arr[2]-arr[3])
    let q = Math.abs(arr[3]-arr[4])
    let h = Math.abs(arr[4]-arr[0])
    arr = [x, y, z, q, h]

    if (i==2020) {
      console.log("line 2020:", arr)
    }
  }
}
find2020(0,6,9,9,2)