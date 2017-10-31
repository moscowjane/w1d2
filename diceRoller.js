//INPUT
//one number from CL



//LOGIC
//that number used to roll six sided dice
function pickNumbers(min,max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor((Math.random() * (max-min) + min));
}


//random function used to generate that many number of numbers
function rollDice(numofDice){
  var rolls = [];
 for(i=0; i < numofDice; i++){
  rolls.push(pickNumbers(1,6));
 }
 return rolls
}



//OUTPUT
//show random numbers
console.log(rollDice(process.argv[2]));