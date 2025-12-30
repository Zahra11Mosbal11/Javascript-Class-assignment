// Coursework 2: KGL Inventory Processing System 
//Part A: Function Implementation
function calculateProcurementCost(tonnageInKg, pricePerKg) {
    if (typeof tonnageInKg !== 'number' || typeof pricePerKg !== 'number' || tonnageInKg === 0 || pricePerKg === 0) {
        return "Invalid input";
    }
    return tonnageInKg * pricePerKg;
} 
const validateBuyerName = buyerName => buyerName.length >= 2 
console.log(validateBuyerName("J")) 

function checkUserAuthorization (role){
    switch(role){
        case 'Manager' :
            return "procurement_and_sales"
        case 'Sales Agent' :
            return "sales_only"
        case 'Director' :
            return "view_aggregations"
        default:
            return "unauthorized"
    }
}

// Part B: Object Creation and Manipulation
function createSalesRecord (buyerName, produceName, tonnage, amountPaid) {
    return {
        id: Math.floor(Math.random() *  9000)+1000,
        produceName: produceName, 
        tonnageInKgs: tonnage,
        buyerName: buyerName, 
        amountPaid: amountPaid,
        saleDate: new Date(),
        isCreditSale: false 

    };
}
const record = createSalesRecord ("suliman", "Beans", 500, 250000);
record.branch = "Maganjo";
record.isCreditSale = true;
record["dueDate"] = new Date();
console.log(Object.keys(record));

for (const key in record) {
    console.log(`"Property:" ${key}, " Value: " ${record[key]}`);
}

// Part C: Loop Implementation and Data Processing 
let weeklyTonnage = [1200, 1500, 980, 2000, 1100, 1800, 1300];
let totalTonnage = 0; 
for (let i = 0; i < weeklyTonnage.length; i++) {
    totalTonnage += weeklyTonnage[i];
    }
console.log("Total weekly tonnage:", totalTonnage);
let averageTonnage = totalTonnage / weeklyTonnage.length;
console.log("Average daily tonnage:", averageTonnage);

let sales_records = [
    { produceName: "Beans", tonnageInKgs: 500, amountPaid: 250000, isCreditSale: false },
    { produceName: "Maize", tonnageInKgs: 800, amountPaid: 400000, isCreditSale: true },
    { produceName: "G-nuts", tonnageInKgs: 300, amountPaid: 180000 },
    { produceName: "Soyabeans", tonnageInKgs: 600, amountPaid: 360000 },
    { produceName: "Cow peas", tonnageInKgs: 400, amountPaid: 220000, isCreditSale: true }
];
creditCount = 0;
for (let i = 0; i < sales_records.length; i++) {
    let record = sales_records[i];
    if (record.isCreditSale === undefined) {
        continue;}
    if (record.isCreditSale === true) {
        creditCount++;
}
}
console.log( "Total credit sales: ", creditCount);
let inventory = [ 
    {name: 'Beans', tonnage: 500}, 
    {name: 'Maize', tonnage: 0}, 
    {name: 'G-nuts', tonnage: 300} 
    ]; 
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].tonnage === 0) {
            console.log(`Manager Alert: ${inventory[i].name} is out of stock!`);
            break;
        }
    }