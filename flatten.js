const flatten = function(array) {
  let flattenArr = []
  array.map((arr)=> {
    if (Array.isArray(arr)){
      arr.map((x) => {
         flattenArr.push(x);
      });
    } else {
      flattenArr.push(arr);
    }
  });

  return flattenArr;
  
};

module.exports = flatten;