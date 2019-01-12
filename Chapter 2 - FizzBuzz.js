// Chaper 2 - FizzBuzz.

/**
 * Returns an array containing a range from the start number to the end number (inclusive).
 * Note that this hasn't been added to Array.prototype, so it behaves like a static member
 * function - it's called like "Array.range" as opposed to "[].range" or "Array().range".
 * 
 * @param {Number} start the number to start from
 * @param {Number} end the number to end at
 * @returns {Array<Number>} the calculated range
 */
Array.range = function (start, end) {
  if (start === undefined) throw new Error(`"start" must be defined`)
  if (end === undefined) throw new Error(`"end" must be defined`)
  return Array.from({ length: (end - start + 1) }, (_, k) => k + start)
}

/**
 * Maps the natural numbers from 1 to a specified number > ONE to the "FizzBuzz numbers".
 * 
 * @param {Number} to the number to calculate up to
 * @returns {Array<Any>} array containing the "FizzBuzz numbers"
 */
const fizzBuzz = (to) => {
  if (to === undefined) throw new Error(`"to" must be defined`)
  if (to <= 1) throw new Error(`"to" must be greater than ONE`)
  // Maps a number to the corresponding "FizzBuzz number".
  const toFizzBuzzNumber = (number) => {
    const fizz = number % 3 == 0
    const buzz = number % 5 == 0
    // Conditions must be specified in this order.
    if (fizz && buzz) return "FizzBuzz"
    if (fizz) return "Fizz"
    if (buzz) return "Buzz"
    return String(number)
  }
  return Array.range(1, to).map(number => toFizzBuzzNumber(number))
}
  
// Print the FizzBuzz numbers up to and including 100.
fizzBuzz(100).forEach(x => console.log(x))
  

  
  