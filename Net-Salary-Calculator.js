//Declaring Prompt
const prompt  = require("prompt-sync")({sigint: true});

//Getting inputs for Monthly Basic Salary and Monthly Contibution Benefits of the user
let monthlyBasicSalary = parseInt(prompt("Enter your Monthly Basic Salary: "));
let monthlyContributionBenefit = parseInt(prompt("Enter Monthly Contribution Benefit: "));

//Validating Inputs
while (isNaN(monthlyBasicSalary) || isNaN(monthlyContributionBenefit) || monthlyBasicSalary < 0 || monthlyContributionBenefit < 0){
    monthlyBasicSalary = parseInt(prompt("Enter your Monthly Basic Salary: "));
    monthlyContributionBenefit = parseInt(prompt("Enter your Monthly Contribution Benefit: "));
}

//Calculating Monthly Gross Salary
let GrossSalary = monthlyBasicSalary + monthlyContributionBenefit;

//Calculating Housing Levy
const housingLevy = (0.015 * GrossSalary);

//Input for Personal Relief
let personalRelief = 2400;

//Validating Personal Relief input
while (isNaN(personalRelief) || personalRelief < 0){
    personalRelief = parseInt(prompt("Enter your Personal Relief"));
}
//Calculating Monthly Taxable Income
let monthlyTaxableIncome = GrossSalary - personalRelief;

//Calculating PAYE
 taxCalculator =(monthlyTaxableIncome) =>{
    let taxRate;
    if (monthlyTaxableIncome < 24000){
        taxRate = 0.1; // 10% tax for income up to KES 24,000

    }
   else if  (monthlyTaxableIncome >= 24000 && monthlyTaxableIncome <= 32333){
        taxRate = 0.25; // 25% tax for income between KES 24,000 and KES 32,333
    }
    else if (monthlyTaxableIncome > 32333 && monthlyTaxableIncome <= 500000){
        taxRate = 0.3; // 30% tax for income between KES 32,333 and KES 50,000
    }
    else if (monthlyTaxableIncome > 500000 && monthlyTaxableIncome <= 800000){
        taxRate = 0.325; // 32.5% tax for income between KES 50,000 and KES 80,000
    }
    else if (monthlyTaxableIncome > 800000){
        taxRate = 0.35; // 35% tax for income above KES 80,000
    }
    let taxPayable = monthlyTaxableIncome * taxRate;
    return taxPayable; 
}
let taxPayable = Math.round(taxCalculator(monthlyTaxableIncome));

//Calculating NHIF Deductions
// defines a function called nhifCalculator that takes in one argument, GrossSalary.
let nhifCalculator = (GrossSalary) =>{
    // This variable will be used to store the NHIF deduction amount.
    let nhifDeduction;
    // This if-else statement assigns the NHIF deduction amount based on the GrossSalary.
    if (GrossSalary <= 5999){
        nhifDeduction = 150;
    }
    // This if-else statement assigns the NHIF deduction amount based on the GrossSalary.
    else if (GrossSalary >= 6000 && GrossSalary <= 7999){
        nhifDeduction = 300; //  assigning a NHIF deduction of 300 if the GrossSalary is between 6000 and 7999.
    }
    else if (GrossSalary >= 8000 && GrossSalary <= 11999){
        nhifDeduction = 400; //  assigning a NHIF deduction of 400 if the GrossSalary is between 8000 and 11999.
    }
    else if (GrossSalary >= 12000 && GrossSalary <= 14999){
        nhifDeduction = 500; //  assigning a NHIF deduction of 500 if the GrossSalary is between 12000 and 14999.
    }
    else if (GrossSalary >= 15000 && GrossSalary <= 19999){
        nhifDeduction = 600; //  assigning a NHIF deduction of 600 if the GrossSalary is between 15000 and 19999.
    }
    else if (GrossSalary >= 20000 && GrossSalary <= 24999){
        nhifDeduction = 750; //  assigning a NHIF deduction of 750 if the GrossSalary is between 20000 and 24999.
    }
    else if (GrossSalary >= 25000 && GrossSalary <= 29999){
        nhifDeduction = 850; //  assigning a NHIF deduction of 850 if the GrossSalary is between 25000 and 29999.
    }
    else if (GrossSalary >= 30000 && GrossSalary <= 34999){
        nhifDeduction = 900; //  assigning a NHIF deduction of 900 if the GrossSalary is between 30000 and 34999.
    }
    else if (GrossSalary >= 35000 && GrossSalary <= 39999){
        nhifDeduction = 950; //  assigning a NHIF deduction of 950 if the GrossSalary is between 35000 and 39999.
    }
    else if (GrossSalary >= 40000 && GrossSalary <= 44999){
        nhifDeduction = 1000; //  assigning a NHIF deduction of 1000 if the GrossSalary is between 40000 and 44999.
    }
    else if (GrossSalary >= 45000 && GrossSalary <= 49999){
        nhifDeduction = 1100; //  assigning a NHIF deduction of 1100 if the GrossSalary is between 45000 and 49999.
    }
    else if (GrossSalary >= 50000 && GrossSalary <= 59999){
        nhifDeduction = 1200; //  assigning a NHIF deduction of 1200 if the GrossSalary is between 50000 and 59999.
    }
    else if (GrossSalary >= 60000 && GrossSalary <= 69999){
        nhifDeduction = 1300; //  assigning a NHIF deduction of 1300 if the GrossSalary is between 60000 and 69999.
    }
    else if (GrossSalary >= 70000 && GrossSalary <= 79999){
        nhifDeduction = 1400; //  assigning a NHIF deduction of 1400 if the GrossSalary is between 70000 and 79999.
    }
    else if (GrossSalary >= 80000 && GrossSalary <= 89999){
        nhifDeduction = 1500; //  assigning a NHIF deduction of 1500 if the GrossSalary is between 80000 and 89999.
    }
    else if (GrossSalary >= 90000 && GrossSalary <= 99999){
        nhifDeduction = 1600; //  assigning a NHIF deduction of 1600 if the GrossSalary is between 90000 and 99999.
    }
    else if (GrossSalary >= 100000){
        nhifDeduction = 1700; //  assigning a NHIF deduction of 1700 if the GrossSalary is greater than 100000.
    }
    return nhifDeduction;
}
let nhifDeduction = nhifCalculator(GrossSalary);

//Declaring NSSF Tiers
let pensionTier = prompt("Enter your pension tier (Tier 1 or Tier 2): ");

// Validating pension  Tier
while (pensionTier !== "Tier 1" && pensionTier !== "Tier 2"){
    pensionTier = prompt("Enter your pension tier (Tier 1 or Tier 2): ");
    }


//Calculating NSSF Contribution
const calculateNssftax =(pensionTier) =>{
    let nssfTax =0;
      //tier 1 deduction is compulsory for everyone
      let tier1Deduction = 0.06 * 7000;
    // The tier 2 deduction is calculated based on the income.
      let tier2Deduction;
      if (pensionTier < 36000){
          tier2Deduction = (pensionTier -7000) * 0.06;
      }
      
      else {
          tier2Deduction = (36000 - 7000) * 0.06;
      }
      
      return tier1Deduction + tier2Deduction;
  } 
  // The function takes the pension tier as an argument and returns the employee contribution.
let employeeContribution = parseInt(calculateNssftax (pensionTier));

//Calculating Net Salary
let netSalary = GrossSalary - taxPayable - nhifDeduction - housingLevy - employeeContribution;

//Output of the Results
function Results(){
//console.log("Your Gross Salary is " + monthlyGrossSalary)
//console.log("Your Tax Payable is " + taxPayable)
console.log("Your NHIF Deduction: KES " + nhifDeduction)
console.log("Your NSSF Contibution: KES " + employeeContribution)
console.log("Your Net Salary: KES " + netSalary)
}
Results();