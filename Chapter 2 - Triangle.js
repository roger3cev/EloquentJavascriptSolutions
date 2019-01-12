// Chapter 2 - Triangle.

"use strict"

/**
 * Array extension function to obtain the last element in an array.
 * If the array is empty the function returns "undefined".
 * 
 * @returns {any} The last element in the array or undefined if the array is empty
 */
Array.prototype.last = function () {
  return this[this.length - 1]
}

/**
 * Prints a triangle of the specified size using the specified character. If no
 * depth is provided then the function will throw an exception.
 * 
 * @param {String} char - The character to print (defaults to "#")
 * @param {Number} depth - The height of the triangle (in lines)
 * @returns {Array<String>} An array of strings containing each row of the triangle
 */
const triangle = function (char = "#", depth) {
  if (depth === undefined) throw new Error("Depth must be defined.")
  // (Tail) recursively builds an array of strings representing the triangle.
  const buildTriangle = (rows = []) => {
    if (rows.length === depth) {
      return rows
    } else {
      const lastRow = rows.last() || ""
      rows.push(lastRow + char)
      return buildTriangle(rows)
    }
  }
  return buildTriangle()
}

// Create and print a triangle.
triangle("#", 5).forEach(row => console.log(row))