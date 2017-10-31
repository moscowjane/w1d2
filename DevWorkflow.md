

Task: Calculator that adds two numbers together




input -> logic -> output

input - putting stuff into a command line

logic - turning numbers into something (talks to an API, or a database)

output - spit data onto a console

command line works -> sum (nums) -> num -> console.log(num)

#Research

Google: node command line argument

console.log

Sums example - debugging - ignoring strings in number functions

//input
//logic  - sum = (numbers[] = number) - will ignore non numeicr input

function sum(nums){
  var runningSum = 0


for(var i=2; i < nums.length; i++){
  if(!isNaN(nums[i])){
  runningSum = runningSum + Number(nums[i]);
  }
}
return runnningSum
}

//output


console.log(sum(process.argv));