// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
if (actual === expected) {
  console.log("✅✅✅ Assertion Passed: " + actual + ' === ' + expected );
} else {
  console.log("🛑🛑🛑 Assertion Passed: " + actual + ' !== ' + expected );
}
}

assertEqual("ABC","ABC");
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(2,2.2);
