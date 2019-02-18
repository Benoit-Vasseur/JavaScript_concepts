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
console.log("foo", foo); // "bar" <- gobal scope
console.log("bam", bam); // "yay" <- global scope changed in the baz function
baz(); // Error because no baz function is the global scope