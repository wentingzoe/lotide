// FUNCTION IMPLEMENTATION
const assertEqual = require('./assertEqual');

const head = function(x){
  let y = x[0];
  return y;
}

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
