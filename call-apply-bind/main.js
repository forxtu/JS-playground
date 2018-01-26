// Call
var obj = {
    num: 3
}

var addToThis = function(a, b) {
    return this.num + a + b;
};

console.log(addToThis.call(obj, 1, 2));

// Apply
/* the same code as call */

var arr = [2, 2];
console.log(addToThis.apply(obj, arr));

// Bind
var bound = addToThis.bind(obj); // bound new function to the obj
console.log(bound(3, 2)); // path arguments from 'addToThis' function like in .call
