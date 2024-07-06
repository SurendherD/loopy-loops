// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `Kalvian-1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
// 1.3 Create a variable `Kalvian-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.
var Kalvian_1 = 'Surendher';
var Kalvian_2 = 'Srikanth';
console.log("The driver's name is " + Kalvian_1);
console.log("The navigator's name is " + Kalvian_2);

// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.

var lengthOfKalvian_1 = 0;
var lengthOfKalvian_2 = 0;
for (var i = 0; Kalvian_1[i] !== undefined; i++) {
  lengthOfKalvian_1++;
}

for (var i = 0; Kalvian_2[i] !== undefined; i++) {
  lengthOfKalvian_2++;
}

if (lengthOfKalvian_1 > lengthOfKalvian_2) {
  console.log("The driver has the longest name, it has " + lengthOfKalvian_1 + " characters.");
} else if (lengthOfKalvian_2 > lengthOfKalvian_1) {
  console.log("It seems that the navigator has the longest name, it has " + lengthOfKalvian_2 + " characters.");
} else {
  console.log("Wow, you both have equally long names, " + lengthOfKalvian_1 + " characters!");
}

// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String Kalvian - a and i are vowels. Print Kalvian a i a 1 4 5.

var havingVowels = false;
var str = 'surendher';
str = [...str];
var Vowels = ['a', 'e', 'i', 'o', 'u'];
var vowelsInStr = '';
var indexOfStr = '';
str.forEach((value, index) => {
  for (let i of Vowels) {
    if (i == value) {
      vowelsInStr = vowelsInStr.concat(value, ' ');
      indexOfStr = indexOfStr.concat(index, ' ');
      havingVowels = true;
    }
  }
});

if (havingVowels === true) {
  console.log(vowelsInStr, indexOfStr);
} else console.log('no vowels');

// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters

var upperCaseCount = 0;
var lowerCaseCount = 0;

function countCaseCharacters(name) {
  var upperCount = 0;
  var lowerCount = 0;
  for (var i = 0; name[i] !== undefined; i++) {
      if (name[i] >= 'A' && name[i] <= 'Z') {
          upperCount++;
      } else if (name[i] >= 'a' && name[i] <= 'z') {
          lowerCount++;
      }
  }
  return [upperCount, lowerCount];
}

var result1 = countCaseCharacters(Kalvian_1);
upperCaseCount += result1[0];
lowerCaseCount += result1[1];

console.log("Number of upper case characters: " + upperCaseCount);
console.log("Number of lower case characters: " + lowerCaseCount);

// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "Kalvian"

var result = "";

for (var i = 0; Kalvian_1[i] !== undefined; i++) {
  var char = Kalvian_1[i];
  if (char >= 'a' && char <= 'z') {
      char = String.fromCharCode(char.charCodeAt(0) - 32);
  }
  result += char + " ";
}

console.log(result.trim());

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. Example "naivlaK"
var reversedResult = "";

for (var i = 0; Kalvian_2[i] !== undefined; i++) {
    reversedResult = Kalvian_2[i] + reversedResult;
}
console.log(reversedResult);


// 3.3 Merge both the characters such that driver is followed by Navigator like "DriverName NavigatorName"
// - Now bring the NavigatorName to the start and send DriverName to the back like "NavigatorName DriverName"
console.log(`${Kalvian_1} ${Kalvian_2}`);
console.log(`${Kalvian_2} ${Kalvian_1}`);

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?
var comparisonResult = 0;
for (var i = 0; Kalvian_1[i] !== undefined && Kalvian_2[i] !== undefined; i++) {
  if (Kalvian_1[i] < Kalvian_2[i]) {
      comparisonResult = -1;
      break;
  } else if (Kalvian_1[i] > Kalvian_2[i]) {
      comparisonResult = 1;
      break;
  }
}

if (comparisonResult === 0 && Kalvian_1[i] !== Kalvian_2[i]) {
  comparisonResult = Kalvian_1[i] === undefined ? -1 : 1;
}

if (comparisonResult === -1) {
  console.log("The driver's name goes first.");
} else if (comparisonResult === 1) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}
// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.

var loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque. Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat. Curabitur augue lorem, dapibus quis, laoreet et, pretium ac, nisi. Aenean magna nisl, mollis quis, molestie eu, feugiat in, orci. In hac habitasse platea dictumst.
Etiam facilisis. Nunc elementum fermentum wisi. Aenean placerat. Ut imperdiet, enim sed gravida sollicitudin, felis odio placerat quam, ac pulvinar elit odio et sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Pellentesque adipiscing eros ut libero. Ut condimentum mi vel tellus. Suspendisse et enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam posuere imperdiet velit. Suspendisse potenti. Sed pulvinar ullamcorper metus. Integer viverra odio sit amet nulla.`;

var wordCount = 0;
var inWord = false;

for (var i = 0; loremIpsum[i] !== undefined; i++) {
    var char = loremIpsum[i];
    if (char === ' ' || char === '\n' || char === '\t' || char === '.' || char === ',') {
        inWord = false;
    } else if (!inWord) {
        inWord = true;
        wordCount++;
    }
}

var etCount = 0;
for (var i = 0; loremIpsum[i] !== undefined; i++) {
    if (loremIpsum[i] === 'e' && loremIpsum[i+1] === 't' && 
        (loremIpsum[i+2] === ' ' || loremIpsum[i+2] === '.' || loremIpsum[i+2] === ',' || loremIpsum[i+2] === undefined)) {
        etCount++;
    }
}

console.log("Number of words: " + wordCount);
console.log("Number of times 'et' appears: " + etCount);

// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin'

var phraseToCheck = "A man, a plan, a canal, Panama!";  // Replace with any phrase to check

var cleanedPhrase = "";
for (var i = 0; phraseToCheck[i] !== undefined; i++) {
    var char = phraseToCheck[i].toLowerCase();
    if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
        cleanedPhrase += char;
    }
}

var isPalindrome = true;
var length = 0;
for (var i = 0; cleanedPhrase[i] !== undefined; i++) {
    length++;
}
for (var i = 0; i < length / 2; i++) {
    if (cleanedPhrase[i] !== cleanedPhrase[length - 1 - i]) {
        isPalindrome = false;
        break;
    }
}

if (isPalindrome) {
    console.log("The phrase is a palindrome.");
} else {
    console.log("The phrase is not a palindrome.");
}
