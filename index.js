// index
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertArraysEqual = require('./assertArraysEqual'); 
const countLetter       = require('./countLetter'); // TODO  
const eqObjects         = require('./eqObjects');                   
const map               = require('./map');// TODO          
const takeUntil         = require('./takeUntil');// TODO
const assertEqual       = require('./assertEqual');    
const countOnly         = require('./countOnly'); // TODO   
const findKey           = require('./findKey'); // TODO
const assertObjectsEqual = require('./assertObjectsEqual');
const eqArrays          = require('./eqArrays');    
const findKeyByValue    = require('./findKeyByValue'); //TODO
const letterPositions   = require('./letterPositions'); // TODO
const without           = require('./without');// TODO

module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  assertArraysEqual: assertArraysEqual,
  countLetter: countLetter, 
  eqObjects: eqObjects,
  map: map,
  takeUntil: takeUntil,
  assertEqual: assertEqual,
  countOnly: countOnly,
  findKey: findKey,
  assertObjectsEqual: assertObjectsEqual,
  eqArrays: eqArrays,
  findKeyByValue: findKeyByValue,
  letterPositions:letterPositions,
  without: without
};
                                       
   
                
          
                              