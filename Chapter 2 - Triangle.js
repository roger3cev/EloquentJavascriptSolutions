// Chapter 2 - Triangle.

"use strict"

/**
 * Array Extension function to obtain last element in an array.
 * If the array is empty the function returns "undefined".
 * 
 * @returns {any} The last element in the array.
 */
Array.prototype.last = function () {
  return this[this.length - 1]
}

/**
 * Prints a triangle of the specified size using the specified character. If no
 * depth is provided then the functino will throw an exception.
 * 
 * @param {String} char - The character to print (defaults to "#")
 * @param {Number} depth - The height of the triangle (in lines)
 * @returns {Array<String>} An array of strings containing each row of the triangle
 */
const triangle = function (char = "#", depth) {
  if (depth === undefined) throw new Error("Depth must be defined.")
  // Recursively builds an array of strings represeting the triangle.
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
const tri = triangle("#", 5).forEach(row => console.log(row))