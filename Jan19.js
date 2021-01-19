// Create a function that returns the sum of the two lowest 
// positive numbers given an array of minimum 4 positive integers. 
// No floats or non-positive integers will be passed.

function sumTwoSmallestNumbers(numbers) {  
    numbers.sort((a, b) => a - b);
    var num1 = numbers[0]
    var num2 = numbers[1]
    var result = num1 + num2
    return result
    // first solution
  }

  function concise(numbers) {
      let [num1, num2] = numbers.sort((a, b) => a - b);
      return num1 + num2
    //this is using destructuring - second solution
  }
  console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77])) // output: 7

  console.log(concise([19, 5, 42, 2, 77])) // output: 7