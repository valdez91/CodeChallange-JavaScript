// This function takes a speed as an argument and determines whether a driver should receive a ticket or not.
const speeding = (speed) => {
    // Check if the speed is less than 70 mph. If so, it should print a warning.
    if (speed < 70) {
      console.log("Ok");
    } 
    // Check if the speed is greater than or equal to 70 mph. If so, it calculates the points and print a message.
    // The points are calculated as follows: 1 point per 5 mph over 70 mph.
    // If the driver gets more than 12 points, the license is suspended.
    else {
      let points = Math.floor((speed - 70) / 5);
      console.log(`Points: ${points}`);
      if (points > 12) {
        console.log("License suspended");
      }
    }
  };
  //Lets test the function with different speeds.
  speeding(80); // Points awarded : 2.
  speeding(100); // Points awarded: 6.
  speeding(300); // Points awarded: 46 it will print license suspended since it exceeds the speed limit.
  speeding(65); // Ok.