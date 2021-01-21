// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b.


function arrayDiff(list1, list2){
    return list1.filter((num)=>!list2.includes(num))
}

// console.log(arrayDiff([1,2],[1])) // == [2]



// Digital root is the recursive sum of all the digits in a number.
// Given n, take the sum of the digits of n. If that value has more than one digit, 
// continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.


// 16  -->  1 + 6 = 7
// 942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

function digital_root(n) {
    var finalSum = sum(n)
    while(finalSum >= 10){
        finalSum = sum(finalSum)
    }
    return finalSum
}
const sum=(n)=> n.toString().split("").map(num => parseInt(num)).reduce((acc, current)=>acc+current)

//  console.log(digital_root(493193))



// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After 
// Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, 
// he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how 
// contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, 
// but they are not capitalized in the same way he originally typed them.

String.prototype.toJadenCase = function (arg) {
    return this.split(" ").map(word => 
      word.charAt(0).toUpperCase() + word.slice(1, word.length)
    ).join(" ")
  };
  var str = "How can mirrors be real if our eyes aren't real";
  
//   console.log(str.toJadenCase())