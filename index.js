// index
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertArraysEqual = require('./assertArraysEqual'); 
const eqObjects         = require('./eqObjects');
const assertEqual       = require('./assertEqual');    
const assertObjectsEqual = require('./assertObjectsEqual');
const eqArrays          = require('./eqArrays');    
const countLetter       = require('./countLetter');   
const map               = require('./map');          
const takeUntil         = require('./takeUntil');
const countOnly         = require('./countOnly');    
const findKey           = require('./findKey'); 
const findKeyByValue    = require('./findKeyByValue'); 
const letterPositions   = require('./letterPositions'); 
const without           = require('./without');

module.exports = {
  assertArraysEqual, 
  findKey, 
  assertEqual, 
  findKeyByValue,
  assertObjectsEqual, 
  head, 
  countLetter, 
  tail,countOnly,  
  letterPositions, 
  takeUntil, 
  eqArrays, 
  map, 
  eqObjects, 
  middle, 
  without
  
};
                                       
   
                
          
                              