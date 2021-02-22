// You are given a node that is the beginning of a linked list. This list always contains a tail and a loop.

// Your objective is to determine the length of the loop.


function loop_size(node){
    var turtle = node;
    var rabbit = node;
    
    // Find a point in the loop.  Any point will do!
    // Since the rabbit moves faster than the turtle
    // and the kata guarantees a loop, the rabbit will
    // eventually catch up with the turtle.
    do {
      turtle = turtle.getNext();
      rabbit = rabbit.getNext().getNext();
    }
    while (turtle != rabbit);
    
    // The turtle and rabbit are now on the same node,
    // but we know that node is in a loop.  So now we
    // keep the turtle motionless and move the rabbit
    // until it finds the turtle again, counting the
    // nodes the rabbit visits in the mean time.

    var count = 0;
    do {
      ++count;
      rabbit = rabbit.getNext();
    }
    while (turtle != rabbit);
  
    // voila
    return count;
  }


//   Your task, is to create NxN multiplication table, of size provided in parameter.

// for example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]

multiplicationTable = function(size) {
    var foo = [];
    for (var i = 1; i <= size; i++) {
        foo.push(i);
    }

    
    return foo.map((item) => foo.map((num)=> num * item ))
}



// console.log(multiplicationTable(3)) //, [[1,2,3], [2,4,6], [3,6,9]]);

// console.log(multiplicationTable(4))


// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence 
// "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string){
  let arr = string.split("")
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("")
  let pangramCheck =  alphabet.map((letter) => arr.includes(letter))
  return !pangramCheck.includes(false)
}



var string = "The quick brown fox jumps over the lazy dog."
console.log(isPangram(string)) //, true)
var string2 = "This is not a pangram."
console.log(isPangram(string2)) //, false)