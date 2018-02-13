var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
cart.push({[item]: Math.floor(Math.random()*100+1)});
console.log(`${item} has been added to your cart.`);
return cart;
}

function viewCart() {
if(cart.length === 0){
  console.log(`Your shopping cart is empty.`)
  return `Your shopping cart is empty.`;
}
else if(cart.length === 1){
  console.log(`In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])}.`)
}
else if(cart.length === 2){
  console.log(`In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])} and ${Object.keys(cart[1])} at $${Object.values(cart[1])}.`)
}
else if(cart.length >= 3) {
  var bigCart = [];
  for (var i = 0; i < cart.length - 1; i++) {
    for (var item in cart[i]) {
      bigCart.push(`${item} at $${cart[i][item]}`);
}
}
console.log(`In your cart, you have ${bigCart.join(", ")} and ${Object.keys(cart[3])} at $${Object.values(cart[3])}.`)
}
}



function total() {
  var price = [];
  var totalPrice = 0;

  for (var i = 0; i < cart.length; i++){
  var itemPrice = [Object.values(cart[i])]
    price.push(parseInt(itemPrice))
}
  for (var h = 0; h < price.length; h++) {
    totalPrice = price[h] += totalPrice
  }
  return totalPrice
}

function removeFromCart(item) {
  var item = [];
  if (item in cart) {
  for (var i = 0; i < len; i++) {
      if (cart[i].hasOwnProperty(item)) {
      conditionality = true
      cart.splice(i, 1)
  }
}
}
else {
  console.log(`That item is not in your cart.`)
}
return cart
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log(`Sorry, we don\'t have a credit card on file for you.`)
    return `Sorry, we don\'t have a credit card on file for you.`
}
  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  return cart = [];
}
