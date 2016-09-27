/**
 * Given an array of numbers, assume that they are all different. Calculate the largest difference (subtraction) between any two numbers of the array.
 * 1. Code in Javascript 2 solutions for this problem
 * 2. Explain which one is better than the other one.
 **/

/**
 * Pseudo-code solution 1:
 * Find the lowest number in the array.
 * Find the highest number in the array.
 * Subtract the lowest from the highest
 * Return the difference.
 **/
function difference(array) {
  return Math.max(...array) - Math.min(...array);
}


/**
 * Pseudo-code solution 2:
 * Iterate through the array.
 * Find the lowest number
 * Find the highest number
 * Return the maximum minus the minimum.
 **/
function findMaxDiff(array) {
  var min = array[0];
  var max = array[0];

  for(var i = 0; i <= array.length; i++){
    if (array[i] < min) {
      min = array[i];
    }
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max - min;
}

/** Tests **/
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var array2 = [10, 2, 13, 4, 5, 60, 7, 8, 9, 10];
var array3 = [7, 10, 2, 20];

console.log(difference(array) === 9);
console.log(difference(array2) === 58);
console.log(difference(array3) === 18);

console.log(findMaxDiff(array) === 9);
console.log(findMaxDiff(array2) === 58);
console.log(findMaxDiff(array3) === 18);

/**
 * Which is better and why?
 * After benchmarking, solution 2 is faster, but solution 1 is
 * more readable.  I would prefer to use solution 1 unless performance
 * was a strict requirement.
 **/