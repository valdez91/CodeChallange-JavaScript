//Grade Generator
//Used Arrow functions assigning it a variable to a function called calculator.
const prompt = require("prompt-sync")({ sigint: true });

const grades =Number(prompt("Enter your grades: "));

  function gradeSystem(grades) {
    while (grades < 0 || grades > 100) {
      console.log("Invalid input. Please enter a number between 0 and 100.");
      grades = Number(prompt("Enter your grades: "));
    }

    if (grades >= 80)
       return("Grade: A");
    else if (grades >= 60 )
        return("Grade: B");
    else if (grades >= 49 )
      return("Grade: C");
    else if (grades >= 40 )
       return("Grade: D");
    else 
      return("Grade: E");
  
  }
 
  //Displaying a message to the user.
  console.log(`Your grade is: ${gradeSystem(grades)} ` );
console.log("your marks have been Graded!")

