const sumAll = function(num1, num2) {
    const array =[];
    let sum;
    if(num1 > num2){
        [num1, num2] = [num2, num1];
    }

    for (let i = num1; i <= num2; i++) {
        console.log(i);
    }

};
sumAll(10,5);
// Do not edit below this line
module.exports = sumAll;
