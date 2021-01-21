// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b.


function arrayDiff(list1, list2){
    return list1.filter((num)=>!list2.includes(num))
}

console.log(arrayDiff([1,2],[1])) // == [2]