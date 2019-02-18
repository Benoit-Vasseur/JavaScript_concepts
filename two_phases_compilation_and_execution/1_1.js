/* to make this compilation phase more clear */

var a = 'a'
console.log("num", num) // undefined because var num will move to the top (hoisting)
num = 2
var num

// we can call f before its declaration
// because the function will be hoisted (move to the top as the var)
f()

function f() {
  console.log("I am f function")
}

console.log("num", error) // ReferenceError: error is not defined