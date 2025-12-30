// Part A: Variable Declaration
const companyName = "Karibu Groceries LTD" // I used "const" because the company name won't change
const minimumTonnage = 1000 // I used "const" because the minimum tonnage is a fixed value
let isOperational = true // I used "let" because the operational status may change
let managerName // I used "let" because the manager name is not yet assigned
let closedBranches = null // I used "let" because closed branches may be changed later
// checking data types
console.log("companyName data type:", typeof(companyName))
console.log("minimumTonnage data type:", typeof(minimumTonnage))
console.log("isOperational data type:", typeof(isOperational))
console.log("managerName data type:", typeof(managerName))
console.log("closedBranches data type:", typeof(closedBranches))

//Part B: String Manipulation and Validation
const dealerNameInput = " james BOND " 
let cleanDealerName = dealerNameInput.trim().toUpperCase()
console.log("Clean Dealer Name:", cleanDealerName) 
// Validation: Check if the cleaned dealer name has more than 2 characters
let isNotEmpty = cleanDealerName.length > 2 ? console.log("Valid dealer name") : console.log("Invalid dealer name")

//Part C: Conditional Logic and Business Rules
let userRole = 'Sales Agent'; 
let procurementTonnage = 1500;
let produceType = 'Beans'; 
let costInUgx = '50000'; 
if (userRole === 'Sales Agent'){
  console.log("you are not allowed to record any produce ")
} else{ 
if (procurementTonnage >= 1000){
  console.log("Procurenot less than 1000kg")
}  if (Number(costInUgx)  >= 10000){
  console.log("not less than 5 digits ")
}}
// 9. Use the logical AND ( && ) operator
if (procurementTonnage >= 1000 && Number(costInUgx)  >= 10000){
  console.log("Procurement record valid")
} else {
  console.log("Procurement record invalid")
}

//Part D: Arrays and Produce Management
let kglProduce = [ "Beans", "Grain maize", "Cow peas", "G-nuts", "Soyabeans" ]
kglProduce.push("Green peas")
kglProduce.shift()
kglProduce.includes("G-nuts")
console.log( kglProduce)
// Merging two arrays
let branch2Produce = ['Maize', 'Beans']
let allProduce = kglProduce.concat(branch2Produce)