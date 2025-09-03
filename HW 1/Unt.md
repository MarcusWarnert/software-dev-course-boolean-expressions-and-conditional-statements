const discount = 0.1;

function calculateTotal(price) {
    return price - (price * discount);
}

console.log(calculateTotal(100)); 
console.log(discount);