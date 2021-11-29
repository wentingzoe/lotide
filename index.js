// index
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertArraysEqual = require('./assertArraysEqual'); 
const eqObjects         = require('./eqObjects');
const assertEqual       = require('./assertEqual');    
const assertObjectsEqual = require('./assertObjectsEqual');
const eqArrays          = require('./eqArrays');    
const countLetter       = require('./countLetter'); // TODO  
const map               = require('./map');// TODO          
const takeUntil         = require('./takeUntil');// TODO
const countOnly         = require('./countOnly'); // TODO   
const findKey           = require('./findKey'); // TODO
const findKeyByValue    = require('./findKeyByValue'); //TODO
const letterPositions   = require('./letterPositions'); // TODO
const without           = require('./without');// TODO

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
                                       
   
                
          
                              