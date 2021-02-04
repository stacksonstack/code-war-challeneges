// This method, which is supposed to return the result of dividing its first argument by its second, 
// isn't always returning correct values. Fix it.

const solve = (x, y) => x/y

// console.log(solve(2, 1)) //, 2);
// console.log(solve(2, 4)) //, 0.5);




// Complete the function so that it finds the mean of the three scores passed to it and returns the 
// letter value associated with that grade.

// Numerical Score	     Letter Grade
// 90 <= score <= 100	 'A'
// 80 <= score < 90	 'B'
// 70 <= score < 80	 'C'
// 60 <= score < 70	 'D'
// 0 <= score < 60	     'F'


function getGrade (s1, s2, s3) {
    let total = s1 + s2 + s3
    let mean = total / 3
    if(mean >= 90) return "A"
    else if(mean >= 80) return "B" 
    else if(mean >= 70) return "C" 
    else if(mean >= 60) return "D"
    else return "F" 
}

//   console.log(getGrade(100,85,96))//, 'A')
//   console.log(getGrade(89,89,90))//, 'B') 
//   console.log(getGrade(75,70,79))// , 'C')



// The code provided is supposed return a person's Full Name given their first and last names.

// But it's not working properly.

// Notes
// The first and/or last names are never null, but may be empty.

// Task
// Fix the bug so we can all go home early.


class Dinglemouse{

    constructor( firstName, lastName ){
        this.firstName = firstName
        this.lastName = lastName
    }
    
    getFullName(){
        if(this.firstName === "" && this.lastName === "") return ""
        else if(this.firstName === "") return this.lastName 
        else if(this.lastName === "") return this.firstName
        return this.firstName+" "+ this.lastName
    }
    
  }

  // refactored version

  class Dinglemouse2{

    constructor( firstName, lastName ){
      this._firstName=firstName;
      this._lastName=lastName;
    }
    
    getFullName(){
      return `${this._firstName} ${this._lastName}`.trim();
    }
    
  }
  

//   console.log(new Dinglemouse("Clint", "Eastwood").getFullName())//, "Clint Eastwood");
//   console.log(new Dinglemouse2("Clint", "Eastwood").getFullName())//, "Clint Eastwood");