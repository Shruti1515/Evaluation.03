
const animals = ["Dog", "Cat", "Elephant", "Giraffe", "Lion", "Tiger", "Zebra", "Kangaroo", "Panda", "Monkey"];

function extractSubArray(arr){
    return animals.slice(3,7);

}
const slicedElements = extractSubArray(animals)
console.log (slicedElements);