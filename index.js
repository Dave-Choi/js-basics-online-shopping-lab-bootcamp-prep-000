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
 
 return `${newItem.itemName} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  let count = cart.length;
  if(count === 0){
    return "Your shopping cart is empty.";
  }
  
  let toks = [];
  for(let i=0; i<count; i++){
    let item = cart[i];
    let name = item.itemName;
    let price = item.itemPrice;
    toks.push(`${name} at ${price}`);
  }
  
  if(count > 1){
    let lastTok = toks[toks.length - 1];
    toks[toks.length - 1] = "and " + lastTok;
  }
  
  let joinedToks = toks.join(", ");
  
  return `In your cart, you have ${joinedToks}.`;
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
