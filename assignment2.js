/**
 * Create a function that takes two rectangles as parameters
 * and returns true if the rectangles intersect, false otherwise.
 * Assume that the (0,0) of the axis is the top left.
 * (This is actually how iOS positions views in the screen).
 * So a rectangle with origin (0,0), width 10 and height 20 would be
 * on the top left corner taking 10 pixels to the right and 20 pixels down.
**/


/**
 * Given two line segments along the same axis, returns true if
 * they overlap and false if they do not.
 *  - min1 is the minimum for the first line segment
 *  - max1 is the maximum for the first line segment
 *  - min2 is the minimum for the second line segment
 *  - max2 is the maximum for the second line segment
 *
 * diagram:
 *  min1-----------max1
 *            min2-----------max2
 **/
function within(min1, max1, min2, max2) {
  return (min1 <= max2 && max1 >= min2);
}

/**
 * Takes two rectangles (objects with x, y, height, and width)
 * Returns true when rectangles overlap, false otherwise
 **/
function intersection(rect1, rect2) {
  return (
    within(rect1.x, rect1.x + rect1.width, rect2.x, rect2.x + rect2.width) &&
    within(rect1.y, rect1.y + rect1.height, rect2.y, rect2.y + rect2.height);
  );
}

/** Tests **/
rect1 = { x: 20, y:30, width: 40, height: 11 };
rect2 = { x: 50, y:22, width: 26, height: 36 };
rect4 = { x: 10, y:10, width: 30, height: 20 };
rect5 = { x: 45, y:10, width: 12, height: 4 };

console.log(intersection(rect1, rect2) === true);
console.log(intersection(rect1, rect4) === true);
console.log(intersection(rect1, rect5) === false);
console.log(intersection(rect2, rect4) === false);
console.log(intersection(rect2, rect5) === false);
console.log(intersection(rect4, rect5) === false);