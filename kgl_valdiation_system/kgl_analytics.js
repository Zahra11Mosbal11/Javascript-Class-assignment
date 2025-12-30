// Coursework 3: KGL Analytics and Reporting System
//Part A: Higher Order Functions - Data Transformation
const procurement_record = [{ 
  id: 211, 
  dealerName: "mona", 
  produceType: "Beans", 
  tonnageInKgs: 5000, 
  costInUgx: 23000, 
  procurementDate: new Date("2023-05-15") 
  },
  {
    id: 212,
    dealerName: "john",
    produceType: "Maize",
    tonnageInKgs: 3000,
    costInUgx: 15000,
    procurementDate: new Date("2023-06-10")
  },
  {
    id: 213,
    dealerName: "alice",
    produceType: "G-nuts",
    tonnageInKgs: 4000,
    costInUgx: 20000,
    procurementDate: new Date("2023-07-05")
  },
  {
    id: 214,
    dealerName: "bob",
    produceType: "Cow peas",
    tonnageInKgs: 3500,
    costInUgx: 18000,
    procurementDate: new Date("2023-08-20")
  },
  {
    id: 215,
    dealerName: "eva",
    produceType: "Grain maize",
    tonnageInKgs: 4500,
    costInUgx: 22000,
    procurementDate: new Date("2023-09-15")
  },
  {
    id: 216,
    dealerName: "mark",
    produceType: "Soyabeans",
    tonnageInKgs: 2500,
    costInUgx: 12000,
    procurementDate: new Date("2023-10-10")
  }]
  const new_procurement_record = procurement_record.map(record => {
    return {
    ...record,
    costPerKg: record.costInUgx / record.tonnageInKgs
    }
  })

const individual_dealers = procurement_record.filter(record => record.tonnageInKgs >= 1000)
console.log(individual_dealers, "the length is", individual_dealers.length)
const total_tonnage = procurement_record.reduce((total, record) => total + record.tonnageInKgs, 0)
const total_cost = procurement_record.reduce((total, record) => total + record.costInUgx, 0)
console.log("Total Tonnage:", total_tonnage, "Total Cost in UGX:", total_cost)

//Part B: Sets for Unique Data Management
function getUniqueDealers (records) {
  const dealerSet = new Set()
  records.forEach(record => {
    dealerSet.add(record.dealerName)
  })
  return Array.from(dealerSet)
}
console.log("Unique Dealers:", getUniqueDealers(procurement_record))
const authorizedRoles = new Set([ 'Manager' , 'Director' ])
function isAuthorizedForProcurement (role) {
  return authorizedRoles.has(role)
}
console.log("Is 'Manager' authorized?", isAuthorizedForProcurement('Manager'))
console.log("Is 'Sales Agent' authorized?", isAuthorizedForProcurement('Sales Agent'))

//Part C: Maps for Price Management
//Create a Map called kglPriceList and set the following key-value pairs
const kglPriceList = new Map([
  ['Beans', 5500],
  ['Grain maize', 4800],
  ['Cow peas', 6000],
  ['G-nuts', 7200],
  ['Soyabeans', 5800]
])
//Write a function calculateSaleTotal 
function calculateSaleTotal (produceName, tonnageInKgs){
  if (kglPriceList.has(produceName)){
    const pricePerKg = kglPriceList.get(produceName)
    return pricePerKg * tonnageInKgs
  } else {
    return "Price not found"
  }
}
console.log("Total sale for 2000kgs of Beans:", calculateSaleTotal('Beans', 2000))
console.log("Total sale for 1500kgs of Maize:", calculateSaleTotal('Maize', 1500))
//Uses a loop to iterate over your kglPriceList Map For each entry, logs
kglPriceList.forEach((price, produce) => {
  console.log(`Produce: ${produce}, Price per Kg: ${price} UGX`)
})
// Calculates and logs the highest price in the Map using the .reduce() method on the Map values
const highestPrice = Array.from(kglPriceList.values()).reduce((max, price) => price > max ? price : max, 0)
console.log("Highest Price per Kg:", highestPrice, "UGX")