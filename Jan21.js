// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b.


function arrayDiff(list1, list2){
    return list1.filter((num)=>!list2.includes(num))
}

// console.log(arrayDiff([1,2],[1])) // == [2]



// Digital root is the recursive sum of all the digits in a number.
// Given n, take the sum of the digits of n. If that value has more than one digit, 
// continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

function digital_root(n) {
    var finalSum = sum(n)
    while(finalSum >= 10){
        finalSum = sum(finalSum)
    }
    return finalSum
}
const sum=(n)=> n.toString().split("").map(num => parseInt(num)).reduce((acc, current)=>acc+current)

 console.log(digital_root(493193))
// 16  -->  1 + 6 = 7
// 942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2