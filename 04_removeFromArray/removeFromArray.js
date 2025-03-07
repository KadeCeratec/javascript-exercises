const removeFromArray = function(array, ...args) {
    let newArray = [];
  array.forEach(element => {
    if(!args.includes(element)){
        newArray.push(element)
    }
  });
  return newArray
};

removeFromArray([4,3,4,5,4], 4);

// Do not edit below this line
module.exports = removeFromArray;
