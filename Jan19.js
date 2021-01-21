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
//   console.log(concise([19, 5, 42, 2, 77])) // output: 7


//   Given two integers a and b, which can be positive or negative, find the sum of 
//   all the integers between including them too and return it. If the two numbers are 
//   equal return a or b.


function getSum( a,b ) {
    var[ lowest, highest] = [ Math.min(a,b), Math.max(a,b)];
    var sumOfRange = 0
    while(lowest <= highest){
        sumOfRange += lowest
        lowest++
    }
    return sumOfRange
}

// console.log(getSum(-1, 2)) // output = 2


// In a factory a printer prints labels for boxes. For one kind of boxes the printer 
// has to use colors which, for the sake of simplicity, are named with letters from a to m.

// The colors used by the printer are recorded in a control string. 
// For example a "good" control string would be aaabbbbhaijjjm meaning that the 
// printer used three times color a, four times color b, one time color h then one time color a...

// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control 
// string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

// You have to write a function printer_error which given a string will return the error 
// rate of the printer as a string representing a rational whose numerator is the number 
// of errors and the denominator the length of the control string. Don't reduce this fraction 
// to a simpler expression.

// The string has a length greater or equal to one and contains only letters from a to z.

const printerError = (s)  => `${[...s].filter(letter => [...'nopqrstuvwxyz'].includes(letter)).length}/${s.length}` 
    //string interpolation allows us to incorporate functionality directly in a string
    
