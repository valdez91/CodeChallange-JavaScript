//Grade Generator
//Used Arrow functions assigning it a variable to a function called calculator.
const calculator = () => {
    let grades;
    //Do-while loop to repeatedly prompt the user to validate grades until a valid input is given.
    do {
      try {
        grades = Number(prompt("Enter your grades: "));
        //Breaking out of the loop if a valid grade is given.
        if (grades >= 0 && grades <= 100)
         break;
        alert("Invalid input. Grades must be between 0 and 100.");
      } 
      //Catching any errors and prompting the user to enter a valid input.
      // e parameter represents the error.
      catch (e) {
        alert("Invalid input. Grades must be a number.");
      }
    } while (true);
  //Conditional statements for A, B, C, D, and E grades.
    switch (true) {
      case grades >= 90:
        alert("Grade: A");
        break;
      case grades >= 80 && grades < 90:
        alert("Grade: B");
        break;
      case grades >= 70 && grades < 80:
        alert("Grade: C");
        break;
      case grades >= 60 && grades < 70:
        alert("Grade: D");
        break;
      default:
        alert("Grade: E");
    }
  };
  //Calling the calculator function.Means that it will execute once the code block has finished executing.
  calculator();
  //Displaying a message to the user.
  console.log("Your finall Grading has been awarded!");