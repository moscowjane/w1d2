function isPalindrome(str) {
  var noSpaces = str.split(" ").join("");
  var mid = Math.floor(noSpaces.length/2);
  var last = noSpaces.length - 1;

  var flag = true;
  for (var i = 0; i < mid; i++) {
    if (noSpaces[i] !== noSpaces[last - i]) {
      flag = false;
    }

  }
 console.log(flag)
}

// Test driver code. These should all log true.

isPalindrome('aviva');