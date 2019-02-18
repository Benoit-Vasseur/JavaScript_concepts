# Compilation phase

Even it seems to be controversial for some persons that want to be very strict on denfitions, we will say here that Javascript is a compiled language. Or let's say that before your js code run there is a "compilation" phase to declare your functions, variables and to construct lexical scopes.

Let's take an example :

```js
// see 1.js
var a = 'a'
num = 2
var num

f()

function f() {
  console.log("I am f function")
}
// see 1_1.js for a more explained example
```

This code will execute just fine ! And it will because there is this compilation phase that is hapening.
Before the code is executed, the JS engine will parse and compile the code.
So the code will "become" like this :

```js
var a;
var num;
function f(){
  console.log("I am f function");
}

a = 'a';
num = 2;

f();
```

I assume that the Automatic Semicolon Insertion is done during the compilation (but I am not sure about that).
More about ASI here : http://www.bradoncode.com/blog/2015/08/26/javascript-semi-colon-insertion/
So because of the compilation, all the declarations are known before the execution of the code.
This compilation phase explains the hoisting and the lexical scoping.

Let's take another example and write out the comipiler job to understand how lexical scoping work.

```js
var foo = "bar";
var bam;
 
function bar() {
    var foo = "baz";
 
    function baz(foo) {
      foo = "bam";
      bam = "yay";
    }
    baz();
}
 
bar();
foo; 		// "bar"
bam; 		// "yay"
baz();  // Error
```

And here the code annotated with the lexical scope work of the compiler

```js
var foo = "bar"; // I have a foo variable declared in the global scope
var bam; // I have a bam variable declared in the global scope
 
function bar() { // I have a function declaration bar in the global scope
    var foo = "baz"; // I have a foo variable declaration in the bar scope
 
    function baz(foo) { // I have a function declaration baz in the bar scope AND I have a variable declaration foo in the baz scope (parameter of the function)
      foo = "bam";
      bam = "yay";
    }
    baz();
}
 
bar();
foo;
bam;
baz();
```
And here the code again with annotations to see what variable affect what scope (during the execution phase)

```js
var foo = "bar"; // global foo = "bar"
var bam;
 
function bar() {
    var foo = "baz"; // foo of S_bar = "baz"
 
    function baz(foo) {
      foo = "bam"; // foo of S_baz = "bam"
      bam = "yay"; // global bam = "yay" (it goes up until the global scope)
    }
    baz();
}
 
bar();
foo; // "bar" <- global foo
bam; // "yay" <- global bam affected in baz function
baz(); // Error <- baz function is not known in the global scope
```