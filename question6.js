const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

function rearrangeArray (arr){

    // REMOVE FIRST THREE ELEMENTS
    const removeElements = arr.splice(0,3);

    // ADD THE REMOVED ELEMENTS INTO END
    arr.push (...removeElements);

    return arr;
}

console.log(rearrangeArray(numbers));

