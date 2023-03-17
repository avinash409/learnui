/*
* multi line comment
*/


// single line comment

// keywords - variable declarations

// functional scope
var a; // default value is undefined
typeof a; // returns data type

// ES6 (ES2015)
// variable scope

// block scoped
let ab;
const b = 10; // exceptions 
// if the variable type is object, you can change the children values

// variable/function hoisting
// js browser/compile sorts the variables and functions first

// arrow functions (ES6)
// block scoped
// concept of `this`

// window
// document

// object (JSON format - Javascript object notation)
/*
{
    key(string): value (any data type - string, number, object, array, functions)
}
*/

/**
 * Arrays
 * var arr = [];
 * 
 * properties of an array
 * length (arr.length)
 * 
 * methods on Array
 * Array.push (arr.push(2))
 * Array.pop (arr.pop())
 * 
 * 
 * Higher order array functions
 * 
 * arr = [{}, {}, {}];
 * 
 * arr.filter => it gives a subset of the array (size <= mainArray size)
 * 
 * Syntax: 
 * 
 * [1, 2, 3, 4].filter(function(el) {
    if(el%2 === 0) {
        return true;
    }
     });
 */

/** 
 * for(var i=0; i<arr.length; i++) {
     console.log(arr[i]);
  }

  // alternative for
  arr.forEach((val) => {

  });

  arr.filter((val, i) => {
    // true
  })

  arr.map(val => {

  })

  arr.find(val => {
    return '';
  })


  true 



  arr.some => boolean (union check a || b = return true if atleast one of them returns true)

  arr.every => boolean (intersection a && b = returns true if all of them return true )
  
  // special cat
    // acc - return val from previous loop, first time, it takes initial value


  var result = arr.reduce((acc, val) => {
    // Loop 1, acc = initialValue

    // Loop 2, acc =  Loop 1 return value

    // Loop 3 acc =  Loop 2 return value

    return acc + val;
  }, initialValue)

  [1,2,3].reduce((sum, val) => {
    // Loop 1 sum = 0, val = 1
    // Loop 2 sum = 1, val = 2
    // Loop 3 sum = 3, val = 3


    return sum + val;
  }, 0); = 6


  students.reduce((acc, val) => {
    // Loop 1 acc = {}, val = {name: 'S1', age: 12, gender: 'M'}
    // Loop 2 acc = {S1:  {name: 'S1', age: 12, gender: 'M'}}, val = {name: 'S1', age: 12, gender: 'M'}
    // Loop 3 sum = 3, val = 3

    acc[val.name] = val; // {
        S1:  {name: 'S1', age: 12, gender: 'M'},
        S1:  {name: 'S2', age: 12, gender: 'M'}
    }

    return acc;
  }, {});

*/


/**
 * null
 * undefined
 * empty
 * false
 * 0
 */

/** == vs ===
 * 1 == "1" ? (false)
 */

/**
 * type casting
 * 1 "1"
 * 1 + "1" = "11"
 */


/**
 * Document
 *  getElementById - searches element by id only and returns 1st match
 *  getElementsByClassName - searches elements by class name and returns list
 *  getElementsByTagName - searches elements by tag name and returns list
 * 
 *  querySelector - searches using CSS selector and returns 1st match
 *  querySelectorAll - Array of HTML nodes (elements)
 */


/**
 * Filter
 */

var bigArray = [1,5,9,11,12,15,18];

var oddNumArray = bigArray.filter(num => {
    return num%2 !== 0;
});

console.log(bigArray.length);
console.log(oddNumArray.length);
console.log("oddNumArray", oddNumArray); // filteredArray length <= mainArray

var obj = { a: 1 };

var students = [
    {
        name: 'S1',
        age: 12,
        gender: 'M'
    },
    {
        name: 'S2',
        age: 13,
        gender: 'M',
        community: {
            cultural: true,
            languages: ['telugu', 'Hindi']
        }
    },
    {
        name: 'S3',
        age: 11,
        gender: 'F'
    }
];

if( section1Students.every(stu => {
    
    if(stu.age < 10){
      return true;
    }
 }) === true ) {
    // 
}

var section2Students;
var section3Students;

const mStudents = students.filter(student => {
    return student.gender === 'M';
});

console.log(mStudents);

/**
 * MAp
 */

var bigArray = [1,5,9,11,12,15,18];

var mappedArray = bigArray.map(num => {
    return num * 2;
});

console.log("mappedArray", mappedArray); // filteredArray length <= mainArray


// spread operator

//shallow copy object
var objB = {...a};