
/*let roles = "Director" |"Manager" | "SalesAgent" 
let userRole = "Manager"
if (userRole === "Director") {
    console.log("Viewing Totals Only")
}
else if (userRole === "Manager") {
    console.log("Can record procurement & Sales")
}cler
else if (userRole === "SalesAgent") {
    console.log("can record Sales Only")
}
else {
    console.log("Access Denied")
}
*/

/*let buyerName = "Amina Hassan"
let amountDue = 15000
let produceName = "bag"

if (buyerName.length >= 2 && amountDue > 10000 && produceName !== "") {
    console.log("record Sale")
}
else {
    console.log(" cannot record Sale")
}*/

/*let produceType = ""

switch (produceType) {
    case "Bananas":
        console.log("Price per kg is 3000 UGX")
        break;
    case "Mangoes":
        console.log("Price per kg is 2500 UGX")
        break;
    case "Pineapples":
        console.log("Price per kg is 4000 UGX")
        break;
    case "Avocados":
        console.log("Price per kg is 3500 UGX")
        break;
    default:
        console.log("Produce type not available") 
}*/

/*let ages = [32, 17, 61, 22, 27, 34, 12]

let sortAges = ages.toSorted()
console.log(ages)
console.log(sortAges)

let kglProduce = [ "beans", "grain maize", "cow peas", "G-nuts", "soya beans" ]

kglProduce.push("green peas")

console.log(kglProduce)


//for loop

let procurements = [1200, 800, 1000, 900]
let totalProcurement = 0

for ( const amount of procurements ) {
 totalProcurement = totalProcurement + amount    
}

console.log("Procurement Average Amount: " , totalProcurement / procurements.length)
*
// function


let checkTonnage = tonnage => tonnage >= 1000;

console.log(checkTonnage(500));

let ages = [32, 17, 61, 22, 27, 34, 12]
let filterrAges = ages.filter( age => age < 25 )
console.log(ages)
console.log(filterrAges)

// objects

let saleRecord = {
    "produceName": "Bananas",
    "tonnageInKgs": 1000,
    "amountPaid": 40000,
    "buyerName": "Zahra"
}
//console.log(saleRecord)

saleRecord.isCreditSale = false
saleRecord.dueDate = "2025-12-12"

// cheking the data types of values in the object 
for (const value of Object.values(saleRecord)){
     if (typeof(value) === "string"){
        console.log (value," is a string")
     }
     else if (typeof(value) === "number"){
        console.log (value, " is a number")
     }
     else if (typeof(value) === "boolean"){
        console.log (value," is a boolean")
     }
}
let branches = users.map( user => user.branch )
const uniqueUsers = new Set(branches)
//console.log(uniqueUsers.has("Kampala"))

let priceList = [
    ["Bananas", 3000],
    ["Mangoes", 2500],
    ["Pineapples", 4000],
    ["Avocados", 3500],
]

const Prices = new Map(priceList)
Prices.set("rice", 5000)

console.log(Prices.has("potatoes"))

Prices.forEach( (value, key) => {
    if (value === 3000){
        console.log(key, value)
    }})
*/
// setes and map

let priceList = [
    ["Bananas", 3000],
    ["Mangoes", 2500],
    ["Pineapples", 4000],
    ["Avocados", 3500],
]

const Prices = new Map(priceList)
console.log(Prices)

Prices.set("milk", 2000)
console.log(Prices.has("Bananas"))
