var foo = "bar";
 
function bar() {
    var foo = "baz";
 
    function baz(foo) {
      foo = "bam";
      bamLHS = "yay"; // not declared but because in non strict mode teh global scope 
      // will be kind and will create a new reference (Left Hand Side)
    }
    baz();
    global.baz = baz
}
 
bar();
console.log("foo", foo); // "bar" <- global scope
console.log("bam", bamLHS); // "yay" <- global scope changed in the baz function
baz(); // baz() exists in the global object / scope
bamLHS = bamRHS // error : not defined because Right Hand Side -> the global scope do not create a reference