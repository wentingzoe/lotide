
const without = function(source, itemsToRemove) {
  let newarr = source.filter(x => !itemsToRemove.includes(x));
  return newarr;
}
module.exports = without;
