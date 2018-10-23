var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function randPrice(){
  // Random int between 1 and 100;
  return Math.floor(Math.random() * 99) + 1;
}

function addToCart(item) {
 // write your code here
 let newItem = {
   itemName: item,
   itemPrice: randPrice()
 };
 
 cart.push(newItem);
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
