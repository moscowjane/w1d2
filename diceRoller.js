//INPUT
//one number from CL



//LOGIC
//that number used to roll six sided dice
function pickNumbers(min,max){
  var range = max - min;
  var offset = min;
  return Math.round((Math.random() * range) + offset);
}


//random function used to generate that many number of numbers
function rollDice(numRolls) {
  var results = [];
  for (var i = 0; i < numRolls; i++) {
    results.push(pickNumbers(1,6));
  }
  return results;
}



//OUTPUT
//show random numbers
var numRolls = process.argv[2];
var rolledResults = rollDice(numRolls);
console.log("Rolled", numRolls, "dice:", rolledResults.join(', '));