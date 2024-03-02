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
for (let i in Kalvian_1) {
  a = a + 1;
}

for (let i in Kalvian_2) {
  b = b + 1;
}

if (lengthOfKalvian_1 > lengthOfKalvian_2) {
  console.log(
    `The driver has the longest name, it has ${lengthOfKalvian_1} characters.`
  );
} else if (lengthOfKalvian_2 > lengthOfKalvian_1) {
  console.log(
    `The navigator has the longest name, it has ${lengthOfKalvian_2} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${lengthOfKalvian_1} characters!.`
  );
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

var Name = 'SurEnDHeR';
var upperCase = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
var lowerCase = [...'abcdefghijklmnopqrstuvwxyz'];
var lengthOfUpperCaseInName = 0;
var lengthOfLowerCaseInName = 0;

for (i of Name) {
  for (let j of upperCase) {
    if (i == j) {
      lengthOfUpperCaseInName = lengthOfUpperCaseInName + 1;
    }
  }

  for (let k of lengthOfLowerCaseInName) {
    if (i == k) {
      lengthOfLowerCaseInName = lengthOfLowerCaseInName + 1;
    }
  }
}

console.log(lengthOfUpperCaseInName);
console.log(lengthOfLowerCaseInName);

// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "Kalvian"

var alphabets = {
  a: 'A',
  b: 'B',
  c: 'C',
  d: 'D',
  e: 'E',
  f: 'F',
  g: 'G',
  h: 'H',
  i: 'I',
  j: 'J',
  k: 'K',
  l: 'L',
  m: 'M',
  n: 'N',
  o: 'O',
  p: 'P',
  q: 'Q',
  r: 'R',
  s: 'S',
  t: 'T',
  u: 'U',
  v: 'V',
  w: 'W',
  x: 'X',
  y: 'Y',
  z: 'Z',
};
var output = '';
for (let j of Kalvian_1) {
  for (let i in alphabets) {
    if (i == j) {
      output = output.concat(alphabets[i], ' ');
    }
  }
}

console.log(output);

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. Example "naivlaK"
var resverse = '';
for (let i = lengthOfKalvian_2 - 1; i >= 0; i--) {
  resverse = resverse.concat(Kalvian_2[i]);
}
console.log(resverse);

// 3.3 Merge both the characters such that driver is followed by Navigator like "DriverName NavigatorName"
// - Now bring the NavigatorName to the start and send DriverName to the back like "NavigatorName DriverName"
console.log(`${Kalvian_1} ${Kalvian_2}`);
console.log(`${Kalvian_2} ${Kalvian_1}`);

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?
if (Kalvian_1 > Kalvian_2) {
  console.log("The driver's name goes first");
} else if (Kalvian_2 > Kalvian_1) {
  console.log('Yo, the navigator goes first definitely.');
} else {
  console.log('What?! You both have the same name?');
}
// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.
var paragraphs =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hendrerit gravida rutrum quisque non. Et tortor at risus viverra adipiscing at in tellus. Sem fringilla ut morbi tincidunt augue interdum velit. Aliquet eget sit amet tellus cras adipiscing. Ornare arcu dui vivamus arcu. Sed sed risus pretium quam vulputate. Massa placerat duis ultricies lacus. Venenatis tellus in metus vulputate eu scelerisque. Ultrices sagittis orci a scelerisque purus semper eget. Tempor id eu nisl nunc. Praesent tristique magna sit amet purus gravida. Tortor pretium viverra suspendisse potenti nullam ac tortor. Consectetur adipiscing elit duis tristique sollicitudin. Nec feugiat nisl pretium fusce id velit ut tortor. Id leo in vitae turpis massa sed. Ornare aenean euismod elementum nisi quis eleifend quam. Condimentum vitae sapien pellentesque habitant. Id leo in vitae turpis massa sed elementum.     Fermentum odio eu feugiat pretium nibh ipsum consequat. Quam vulputate dignissim suspendisse in est ante in nibh. Sit amet facilisis magna etiam tempor orci eu. Euismod quis viverra nibh cras pulvinar mattis nunc sed. At tempor commodo ullamcorper a lacus vestibulum. Enim blandit volutpat maecenas volutpat blandit aliquam. Purus faucibus ornare suspendisse sed nisi lacus sed viverra. Morbi non arcu risus quis. Habitant morbi tristique senectus et. Enim diam vulputate ut pharetra sit amet. Nisi vitae suscipit tellus mauris. Habitant morbi tristique senectus et netus. Tortor pretium viverra suspendisse potenti. Ipsum nunc aliquet bibendum enim facilisis gravida. Sapien eget mi proin sed. Orci phasellus egestas tellus rutrum tellus pellentesque eu.  Egestas maecenas pharetra convallis posuere morbi leo urna. Lorem ipsum dolor sit amet consectetur adipiscing elit ut. At tellus at urna condimentum mattis pellentesque id nibh tortor. Ipsum faucibus vitae aliquet nec. Cursus vitae congue mauris rhoncus. Et netus et malesuada fames. Elementum sagittis vitae et leo duis ut diam quam. Ut etiam sit amet nisl purus in. Donec pretium vulputate sapien nec. Sed id semper risus in. Nam at lectus urna duis convallis. Massa massa ultricies mi quis hendrerit dolor magna eget est. Massa tincidunt nunc pulvinar sapien et. Consectetur adipiscing elit duis tristique. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Posuere morbi leo urna molestie. Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Morbi tristique senectus et netus et malesuada. Aliquet sagittis id consectetur purus ut faucibus pulvinar.';

var words = 0;
for (let space of paragraphs) {
  if (space == ' ') {
    words = words + 1;
  }
}
console.log(words);

var count = 0;
paragraphs = paragraphs.split(' ');
for (let i of paragraphs) {
  if (i.toLowerCase() === 'et') {
    count = count + 1;
  }
}
console.log(count);

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

function isPalindrome(str) {
  var Str = str.toLowerCase();

  for (var i = 0, j = Str.length - 1; i < j; i++, j--) {
    while (!/[a-zA-Z0-9]/.test(Str[i])) {
      i++;
    }

    while (!/[a-zA-Z0-9]/.test(Str[j])) {
      j--;
    }

    if (Str[i] !== Str[j]) {
      return false;
    }
  }
  return true;
}

var phraseToCheck = 'A man, a plan, a canal, Panama!';
var isPalindromeResult = isPalindrome(phraseToCheck);
console.log(
  `The phrase "${phraseToCheck}" is a palindrome: ${isPalindromeResult}`
);
