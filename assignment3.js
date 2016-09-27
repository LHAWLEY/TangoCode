/**
 * Given the function assignment3 that calculates a number from a string.
 * Find the string for which the number is: 667734139064.
 * The string has 7 characters and it can have repeated chars.
 * The strings has to be formed with the characters:
 * "a","c","d","e","g","i","l","m","n","o","p","r","s","t","u","w".
 **/
function assignment3(str) {
  var h = 7;
  var letters = ["a","c","d","e","g","i","l","m","n","o","p","r","s","t","u","w"];
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    var index = letters.indexOf(letter);
    h = (h * 37) + index;
  }
  return h;
}


/** The string associated with the number 667734139064 is 'correct'. **/

/**
 * Brute forcing each potential solution.
 *  - Letters on the end of the string increment the value by 1
 *  - Letters on the beginning of the string have a bigger impact
 * Starting with all "a"'s, obtain the value, and then increment the value:
 *
 * aaaaaaa, aaaaaac, aaaaaad, ..., aaaaaca, aaaaacc, aaaaacd, ..., wwwwwww
 *
 * This pattern is similar to Big-Endian addition of numbers using a base 16
 * system (where each number represents a letter/an index into the letters
 * array). By incrementing the base 16 number, you can obtain every potential
 * word and check its "assignment3" value.
 **/
function solve () {
  var hex = toHex(0);
  var word = getWordFromHex(hex);

  while (assignment3(word) !== 667734139064) {
    hex = increment(hex);
    word = getWordFromHex(hex);
  }
  return word;
}

/**
 * Takes a hex string, e.g. "0f123ab", and returns the
 * word associated with that string, e.g. "awcdepr"
 **/
function getWordFromHex (hex) {
  var letters = ["a","c","d","e","g","i","l","m","n","o","p","r","s","t","u","w"];
  var word = '';

  for (var i = 0; i < hex.length; i++) {
    var index = toNum(hex[i]);
    var letter = letters[index];

    word += letter;
  }
  return word;
}

/**
 * Takes a hex string, e.g. "0f123ab", and returns the
 * base 10 number associated with that hex, e.g. 15803307
 **/
function toNum (string) {
  return parseInt(string, 16);
}

/**
 * Takes a base 10 number, e.g. 15803307, and returns the
 * hex string associated with that number, e.g. "0f123ab"
 **/
function toHex (number) {
  var pad = '0000000';
  var str = (number).toString(16);

  return pad.substring(0, pad.length - str.length) + str;
}

/**
 * Increments a hex string, e.g. "0f123ab" -> "0f123ac"
 **/
function increment (hexString) {
  var num = toNum(hexString);

  return toHex(num + 1);
}