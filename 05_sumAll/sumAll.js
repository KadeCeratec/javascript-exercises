const sumAll = function(num1, num2) {
    const array =[];
    let sum;
    if(num1 > num2){
        [num1, num2] = [num2, num1];
    }

    for (let i = num1; i <= num2; i++) {
        array.push(i);
    }

     sum = array.reduce((acc, num)=> acc + num, 0);
    return sum


};
sumAll(7, 15);
// Do not edit below this line
module.exports = sumAll;
