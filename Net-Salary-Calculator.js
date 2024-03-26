
//tax rates in percentage
const prompt = require("prompt-sync")({ sigint: true });


// Get input from user
let basicSalary = Number(prompt("Enter your basic salary: "));
// Get input from user
let benefits = Number(prompt("Enter your benefits: "));

let grossSalary = basicSalary + benefits;
// Function to calculate KRA tax



// Function to calculate NHIF tax.

const calculateNhiftax =(grossSalary) => {
  let nhifTaxRate = 0;

  if(grossSalary <= 5999){
    return 150;
}
else if(grossSalary >= 6000 && grossSalary <= 7999){
    return 300;
}
else if(grossSalary >= 8000 && grossSalary <= 11999){
    return 400;
}
else if(grossSalary >= 12000 && grossSalary <= 14999){
    return 500;
}
else if(grossSalary >= 15000 && grossSalary <= 19999){
    return 600;
}
else if(grossSalary >= 20000 && grossSalary <= 24999){
    return 750;
}
else if(grossSalary >= 25000 && grossSalary <= 29999){
    return 850;
}
else if(grossSalary >= 30000 && grossSalary <= 34999){
    return 900;
}
else if(grossSalary >= 35000 && grossSalary <= 39999){
    return 950;
}
else if(grossSalary >= 40000 && grossSalary <= 44999){
    return 1000;
}
else if(grossSalary >= 45000 && grossSalary <= 49999){
    return 1100;
}
else if(grossSalary >= 50000 && grossSalary <= 59999){
    return 1200;
}
else if(grossSalary >= 60000 && grossSalary <= 69999){
    return 1300;
}
else if(grossSalary >= 70000 && grossSalary <= 79999){
    return 1400;
}
else if(grossSalary >= 80000 && grossSalary <= 89999){
    return 1500;
}
else if(grossSalary >= 90000 && grossSalary <= 99999){
    return 1600;
}
else{
    return 1700;
}
}


// Function to calculate NSSF tax

const calculateNssftax =(basicSalary) =>{
  let nssfTax =0;
    //tier 1 deduction is compulsory for everyone
    let tier1Deduction = 0.06 * 7000;
  
    let tier2Deduction;
    if (basicSalary < 36000){
        tier2Deduction = (basicSalary -7000) * 0.06;
    }
    
    else {
        tier2Deduction = (36000 - 7000) * 0.06;
    }
    
    return tier1Deduction + tier2Deduction;
} 


const calculateKratax=(grossSalary) => {
  let kraTaxRate = 0;
// Calculate PAYE based on taxable income
if (grossSalary <= 24000) {
  kraTaxRate = grossSalary* 0.01;
  return kraTaxRate;
} else if (grossSalary > 24000 && grossSalary<= 32333) {
  kraTaxRate = 2400 + (grossSalary - 24000)* 0.25;
  return kraTaxRate;
} else if (grossSalary > 32333 && grossSalary<= 500000) {
  kraTaxRate = 7833.25 +(grossSalary - 32333)* 0.30;
  return kraTaxRate;
} else if (grossSalary > 500000 && grossSalary <= 800000) {
  kraTaxRate = 150000 + (grossSalary - 500000)* 0.325;
  return kraTaxRate;
} else {
  kraTaxRate = 280000 + (grossSalary - 800000)* 0.35;
  return kraTaxRate;
}
}



// Function to calculate net salary
const calculateNetSalary = (basicSalary, benefits, kraTax, nhifTax, nssfTax) => {
  return grossSalary - kraTax - nhifTax - nssfTax ;
};

// Calculate the KRA tax, NHIF tax, and NSSF tax
let kraTax = calculateKratax(grossSalary);
let nhifTax = calculateNhiftax(grossSalary);
let nssfTax = calculateNssftax(grossSalary);

// Calculate net salary
let netSalary = calculateNetSalary(basicSalary, benefits, kraTax, nhifTax, nssfTax);

// Display the KRA tax, NHIF tax, NSSF tax, and net salary
console.log("KRA tax: KES " + kraTax);
console.log("NHIF tax: KES " + nhifTax);
console.log("NSSF tax: KES " + nssfTax);
console.log("Your net salary is KES " + netSalary);
console.log("Total deductions: KES " + (kraTax + nhifTax + nssfTax));