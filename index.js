
let scol1 = 1333
let scol2 = 333

let chek = scol1 <= scol2
console.log(chek)
console.log("Hello World!")
let pastday = new Date("2025-011-15")
let curntday = new Date()
let timediff = pastday.getTime() - curntday.getTime()

console.log(-(timediff / 1000 / 60 / 60 / 24) + " days left until June 15, 2025")

