const numbers = [1, 2, 3, 4, 5];

function calculateSum (numbers){
    let total = 0;

    numbers.forEach(function(number){
        total+=number;

    })
    return total;
}
console.log(calculateSum(numbers)); // Output: 15
