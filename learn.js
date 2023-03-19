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

var section1Students = [];
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


var x =2;
var y;
switch(x) {
  case 1: y = x * 1;
  case 2: y = x * 3;
  case 5: y = x *5;
  default: y = x * 10;
}

console.log('y', y);

parseInt('123abcd'); // NaN
// isNaN

const timer1 = setTimeout(() => {

}, 100);

clearTimeout(timer1);

const intTimer = setInterval(() => {

}, 100);

clearInterval(timer);


// Event Loop


var timer = 0;

function doSetTimeout(j) {
  // var j; local variable (j = i);
  console.log('do', j);
  setTimeout(function(){
    console.log('do timer', j); // i value will taken during run time (10)
  }, 100);
}

for(var i=0; i<10; i++) {
  // for loop i - local variable
  // console.log('loop', i);
  setTimeout(function(){
    console.log('loop timer', i); // i value will taken during run time (10)
  }, 100);
  doSetTimeout(i);
}

// (for loop)


// Object creation
var obj12 = new Object();
var obj122 = {};

// import {useState} from "react";

function Product(name, price) {
  this.name = name;
  this.price= price;
}

new Product(1, 2); // {name: 1, price: 2};

function Food(name, price) {
  Product.call(this, name, price);

  this.category = 'food';
}

new Food(1,2); // {name: 1, price: 2, category: 'food'}

const numbers = [1,2,3,4];

Math.max.call(null, 1,2,3,4);
Math.max.apply(null, numbers); // Math.max(...numbers);

const obj121 = {
  x113: 42,
  getX: function() {
    return this.x113;
  }
}

obj121.getX(); // 42

// class abcd {
//   constructor(a, b) {
//     this.a = a;
//     this.b = b;
//   }

//   method() {

//   }

//   componentDidMount() {

//   }

//   componentWillMount() {

//   }

//   componentDidChange() {

//   }

//   render() {
//     <div>{}</div>
//   }

// }


/* Promise */

var myApiPromise = fetch('url');

myApiPromise.then(function(response) {
  // success callback
}, function() {
  // fail callback
}).catch(function() {
  // rejected failed handler
});

var myPromise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve('success');
  }, 2000)
});

// async, await
/** SPA - Single Page Applications */



/** AJAX */
// request headers (params, request header payload)
// request body
// request method type (OPTIONS, POST(C), GET (R), PATCH(U),PUT(U), DELETE(D)) -> (CRUD operations)

//reponse headers
//response body

const req = new Request("url");
const searchParams = new URLSearchParams();
searchParams.append('key', 'val');

fetch(req);

fetch("url/endpoint", {
  body: {},


  // request headers, request body
}).then(() => {
  // success
}).catch(() => {

});

// 2xx - Success (200)
// 3xx - success (302 - Data not changed)
// 4xx - client request error (400 - Bad request, 404 - not found, 403 - forbidden, 401 - unauthorized)
// 5xx - Internal Server error (500 - code error, 502 - api gateway error)

// window.XMLHttpRequest

// RESTful API calls - CRUD
// window.fetch -> client request anything from server

// 3rd party libraries - axios ( interceptors )

// Redux (middlewares for FE)