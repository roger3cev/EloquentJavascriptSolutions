/** Chapter 3. */
  
  // Min.
  const min = (x, y) => x < y ? x : y
  
  // isEven.
  const isEven = (number) => {
      if (number == 0) {
        return true
      } else if (number == 1) {
        return false
      } else {
        if (number < 0) {
          return isEven(number + 2)
        } else {
          return isEven(number - 2)
        }
      }
    }
  
  // Count char.
  const countChar = (str, char) => Array.from(str).filter(c => c === char).length
  const countBs = (str) => countChar(str, "B")
  
  // Range and sum
  const range = (start, end, step = 1) => {
      const length = start < end 
        ? (end - start + 1) / step 
        : ((start - end) / Math.abs(step)) + 1 
      return Array.from({ length: length }, (_, k) => start + (k * step))
  }
  
  const sum = (numbers) => numbers.reduce((x, y) => x + y)
    
  console.log(range(1, 10));
  // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  console.log(range(1, 10, 2));
  // → [1, 3, 5, 7, 9]
  console.log(range(5, 2, -1));
  // → [5, 4, 3, 2]
  console.log(range(5, 2, -2));
  // → [5, 3]
  console.log(range(10, -2, -2));
  // → [10, 8, 6, 4, 2, 0, -2]
  console.log(sum(range(1, 10)));
  // → 55
  
  // Reverse.
  
  const reverseArray = (array) => array.reduce((a, b) => [b].concat(a))
  
  const reverseArrayInPlace = (array) => {
    const maxIndex = array.length - 1
    const swap = (element, currentIndex) => {
      // Without this check, the array would reverse 
      // and THEN reverse back again to the prior state.
      if (currentIndex >= (maxIndex / 2)) return
      const first = array[currentIndex]
      array[currentIndex] = array[maxIndex - currentIndex]
      array[maxIndex - currentIndex] = first
    }
    return array.forEach(swap)
  }
  
  console.log(reverseArray(["A", "B", "C"]));
  // → ["C", "B", "A"]
  console.log(reverseArray([1, 3, 3, 7]));
  // → [7, 3, 3, 1]
  let arrayValue = [1, 2, 3, 4, 5];
  reverseArrayInPlace(arrayValue);
  console.log(arrayValue);
  // → [5, 4, 3, 2, 1]