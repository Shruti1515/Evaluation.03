
var store = [
    {name: "Laptop", price: 75000, rating: 4.5},
    {name: "Tablet", price: 30000, rating: 4.2},
    {name: "Smartphone", price: 60000, rating: 4.7},
    {name: "Smartwatch", price: 20000, rating: 3.9}
];

// Print the names and ratings of all products.

console.log ("Name and Ratings of all Products-");
store.forEach(product =>{
    console.log (`Name: ${product.name}, Rating: ${product.rating}`)
});

// Calculate and print the average rating.

const totalRating = store.reduce ((sum,product)=>
    sum+product.rating, 0);
const avergRating = totalRating / store.length;

console.log (`Average rating: ${avergRating.toFixed(2)}`)


// Identify and print the name of the product with the minimum price.

const minPrice = store.reduce ((min,product)=>{
    return product.price < min.price ? product: min;
})
console.log (`${minPrice.name} with the minimum price ${minPrice.price}`);

// Ensure the function accurately performs these tasks without modifying the original store array.

// NO MODIFICATIONS ARE MADE IN THIS ORIGNAL STORE ARRAY IN THIS FUNTION