function len(string) {
  return string.length;
}

function countAs(string) {
  let count = 0;
  for (let char of string) {
    if (char.toLowerCase() === "a") {
      count++;
    }
  }

  return count;
}
function starPad(string) {
  const newString = string.padStart(10, "*");
  return newString;
}

function reverseString(string) {
  const newString = string.split('').reverse().join(''); 
  return newString;
}

function isPalindrome(string) {
  const cleanedString = string.replace(/\s+/g, '').toLowerCase();
  const reversedString = cleanedString.split('').reverse().join('');
  return cleanedString === reversedString;
}



module.exports = { len, countAs, starPad, reverseString,isPalindrome };
