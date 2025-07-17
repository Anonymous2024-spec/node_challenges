//  Write a function that accepts a number and returns the factorial of that number. E.g factorial(4);
// Output 24
function numFactorial(number) {
  let res = 1;
  for (let i = 1; i <= number; i++) {
    res *= i;
  }
  return res;
}

// 2. Write a function that accepts an array of numbers and returns the largest number in the array. Note: Do not use Math.max(); for this solution.

function largeNum(numbers) {
  if (numbers.length === 0) {
    return undefined;
  }

  let largest = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }
  return largest;
}

// const numbers = [1.0, 7, 9, 8, 6, 4, 3, 2];
// const largestNumber = largeNum(numbers);
// console.log(largestNumber);

// smallest no.
function smallNum(numbers) {
  if (numbers.length === 0) {
    return undefined;
  }

  let smallest = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < smallest) {
      smallest = numbers[i];
    }
  }
  return smallest;
}

const smallnumbers = [7, 9, 8, 6, 4, 3, 2, 10];
console.log(smallnumbers.length);
const smallestNumber = smallNum(smallnumbers);
console.log(smallestNumber); // Output: 1

// 3. Write a function that accepts a string and returns the number of consonants in that string.
function countConsonants(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let char of str.toLowerCase()) {
    if (/[a-z]/.test(char) && !vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

// 4. Write a function that accepts a number and returns the multiplication table for that number up to 12.
//   E.g function(5);
//  // Output below
//   5 X 1 = 5
//   5 X 2 = 10
//   ...
//  5 X 12 = 60

function multiplicationTable(number) {
    for (let index = 1; index <= 12; index++) {
      console.log(`${number} X ${index} = ${number} * ${index}`)
        
    }
}

multiplicationTable(2)