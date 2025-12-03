//1. String Concatenation Challenge
const dealerName = "Osman Ahmed"
const location = "Zana"
const product = "bag"

let message = 
"Dealer: " + dealerName +
" | Location: " + location +
" | Product: " + product

console.log(message)

//2. Template Literal Practice

message = `Dealer:  ${dealerName} | Location:  ${location} | Product: ${product}`
console.log(message)

//3. Type Checking and Conversion
const strNumber = "25";
const number = 1;
const conToNumber = Number(strNumber)
const conToBool = Boolean(number)
const conToString = String(number)

console.log(typeof strNumber, typeof number)

console.log(conToNumber, conToBool, conToString)

//4. String Method Challenge
let strTest = "hello Paul"

console.log(strTest.toUpperCase())
console.log(strTest.split(" "))
console.log(strTest.replace("Paul", "Zahra"))

//5. KGL Data Formatting Task (Real-World Example)
let dealerInput = " osman ahmed "
let productCodeInput = "tr-213-56"

const dealerNameUp = dealerInput.trim().toUpperCase()
const productCode = productCodeInput.split("-")

const finalMessage = `Dealer: ${dealerNameUp} Product Code: ${productCode}`

console.log(finalMessage)
