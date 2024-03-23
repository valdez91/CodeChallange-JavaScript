//tax rates in percentage
const kraTaxRate = 10.0;
const nhifTaxRate = 1.5; 
const nssfTaxRate = 5.5; 

// Get input from user
let basicSalary = Number(prompt("Enter your basic salary: "));

// Function to calculate KRA tax
// function takes a basic salary as an argument and returns the tax calculated as a percentage of the basic salary.
//function calculates the tax by multipling basic salary by kra tax rate (10.0) then divides the result by 100.
const calculateKratax=(basicSalary) => {
  return basicSalary * kraTaxRate / 100;
}

// Function to calculate NHIF tax.
//same to the KRA above.
const calculateNhiftax =(basicSalary) => {
  return basicSalary * nhifTaxRate / 100;
}

// Function to calculate NSSF tax
//same to the KRA and NHIF above.
const calculateNssftax =(basicSalary) =>{
  return basicSalary * nssfTaxRate / 100;
}

// Get input from user
let benefits = Number(prompt("Enter your benefits: "));

// Function to calculate gross salary
//Defined a function calculateGrosspay with two parameters basicSalary and benefits.
//benefits argument is used to add any additional benefits to the gross salary. 
const calculateGrosspay =(basicSalary, benefits) =>{
  return basicSalary + benefits;
}
// Function to calculate net salary
const calculateNetpay =(grossSalary) =>{
  let kraTax = calculateKratax(grossSalary);
  let nhifTax = calculateNhiftax(grossSalary);
  let nssfTax = calculateNssftax(grossSalary);
  return grossSalary - kraTax - nhifTax - nssfTax;
}

// Main function
const calculateNetSalary=(basicSalary, benefits) => {
  let grossSalary = calculateGrosspay(basicSalary, benefits);
  let netSalary = calculateNetpay(grossSalary);
  return netSalary;
}



// Calculate net salary
let netSalary = calculateNetSalary(basicSalary, benefits);

// Display result
console.log("Your net salary is KES " + netSalary);