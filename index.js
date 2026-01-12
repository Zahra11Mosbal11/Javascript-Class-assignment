
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
//
let namber = "Zahra"

    function convertStringToNumber(str) {
        const num = Number(str);
        if (isNaN(num)) {
            throw new Error("Invalid number format");
        }
        return num;
    }
   console.log(convertStringToNumber(namber)); 
   let tonnage = "1500"
   
   // classes lesson
    class Sale{
    constructor(id, amountPaid, purchaseDate, isCreditSale){
        this.id = id
        this.amountPaid = amountPaid
        this.purchaseDate = purchaseDate
        this.isCreditSale = isCreditSale
    }   
   }
   let sale1 = new Sale()
   let sale2 = new Sale()

   

   class ProcurementRecord{
    name
    tonnage
    totalCost
    constructor(name, tonnage, totalCost){
        this.name = name
        this.tonnage = tonnage
        this.totalCost = totalCost
    }
    calculateUnitCost(){
        if (this.tonnage === 0){
            throw new Error("Tonnage cannot be zero")
        }
        return this.totalCost / this.tonnage
    }
   }
   let product1 = new ProcurementRecord("maize", 1000, 3000000)
   try{
    console.log(product1, "Unit Cost: ", product1.calculateUnitCost())
   }catch(error){
    console.log("Error calculating unit cost: ", error.message)
   }
   */
  class KGLSale{
    constructor(product, tonnage){
        this.product = product
        this.tonnage = tonnage
    }
    getDetails(){
        return `Sold: ${this.tonnage} kgs`
    }
  }
class CreditSale extends KGLSale{
    constructor(product, tonnage, nationalID, date){
        super (product, tonnage)
        this.nationalID = nationalID
        this.date = date
    }
}
const sale = new CreditSale("Bananas", 1500, "12345678", "2024-10-10")
console.log(sale.product)
console.log(sale.nationalID)

class SalesAgent{
    constructor(id, name, branch, sale, isActive){
        this.id = id
        this.name = name
        this.branch = branch
        this.sale = sale
        this.isActive = isActive
    }
    getAgentDetails(){
        return `Agent Name: ${this.name}, Branch: ${this.branch}`
    }
    getStatus(){    
        return this.isActive ? "Active" : "Inactive"
    }
    canRecordProcurement(){
        return false
    }
}
class Manager extends SalesAgent{
    constructor(id, name, branch, sale, isActive){
        super(id, name, branch, sale, isActive)
    }
    canRecordProcurement(){
        return true
    }
}
let agent1 = new SalesAgent(1, "Amina", "Kampala", 500000, true)
let manager1 = new Manager(2, "David", "Entebbe", 2000000, true)
console.log(agent1.getAgentDetails(), agent1.canRecordProcurement())
console.log(manager1.getAgentDetails(), manager1.canRecordProcurement())


class Item{
    constructor(name, price){
        this.name = name
        this.price = price
    }
    getPrice(){
        return this.price
    }
}
class PerishableItem extends Item{
    constructor(name, price, daysUntilExpiry){
        super(name, price)
        this.daysUntilExpiry = daysUntilExpiry
    }
    getPrice(){
        const discount = 1/this.daysUntilExpiry
        return this.price * (1 - discount)
    }
}
let item1 = new Item("Milk", 5000)
let perishableItem1 = new PerishableItem("Milk", 5000, 5)
console.log(item1.name, " Price: ", item1.getPrice())
console.log(perishableItem1.name, " Price after discount: ", perishableItem1.getPrice())