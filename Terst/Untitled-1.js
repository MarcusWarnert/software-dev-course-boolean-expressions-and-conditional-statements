//Task 1: Using forEach()
let myCities = ["Ventura", "Warner", "Santa Paula", "Alstead", "Vancouver"];
myCities.forEach((city, index, array) => {
    array[index] = city.toUpperCase();   
});
console.log(myCities);// ["VENTURA", "WARNER", "SANTA PAULA", "ALSTEAD", "VANCOUVER"]

//Task 2: Transforming with map()
let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map((num) => num * num);
console.log(squares);// [1, 4, 9, 16, 25]

//Task 3: Filtering with filter()
let scores = [85, 42, 90, 75, 30, 100];
let highScores = scores.filter(num => 80);
console.log(highScores);// [85, 90, 100]

//Task 4: Finding with find() and findIndex()
let favoriteFood = ["Zoupa", "Pizza", "Fettucine", "Wings" , "Ham"];
let fourLetterFood = favoriteFood.find(food => food.length, 4);
console.log(fourLetterFood);// [0]

let indexFourLetterFood = favoriteFood.findIndex(food => "Pizza");
console.log(indexFourLetterFood);