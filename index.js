function isPalindrome(word) {
  // Write your algorithm here  }
  if(word.length <= 1) {
    return true;
  }else if (word[0] === word[word.length - 1]){
    return isPalindrome(word.slice(1, -1))
  }else{
    return false;
  }
}

/* 
  Add your pseudocode here
  check if word length is less than or equal to 1

  if the first letter of the word is the same as the last letter of the word
    slice the word and heck again

*/

/*
  Add written explanation of your solution here
  -If the length of the word is 1 letter or less than 1, it's a palindrome.
  -If the first letter of the word is the same as the last letter, then slice the word and check again until completion
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
