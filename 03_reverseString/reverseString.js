const reverseString = function(string) {
   let newWord = string.split("");
   let reverseWord= newWord.reverse().join("");

   return reverseWord;
   
};

reverseString("hello")
// Do not edit below this line
module.exports = reverseString;
