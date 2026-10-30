// My code
function calcDiscount(price, discountPercent) {
  return (price * discountPercent) / 100;
}

function calcTax(priceAfterDiscount, taxPercent) {
  return (priceAfterDiscount * taxPercent) / 100;
}
function calcFinalprice(price, discountPercent, taxPercent) {
  let priceAfterDiscount = price - discountPercent;
  return priceAfterDiscount + calcTax(priceAfterDiscount, taxPercent);
}
function createPriceSummary(price, discountPercent, taxPercent) {
  let priceAfterDiscount = price - discountPercent;
  return {
    price: price,
    discount: calcDiscount(price, discountPercent),
    tax: calcTax(priceAfterDiscount, taxPercent),
    finalPrice: calcFinalprice(price, discountPercent, taxPercent),
  };
}
console.log(createPriceSummary(100, 20, 10));
console.log(createPriceSummary(200, 25, 5));
console.log(createPriceSummary(50, 0, 10));

// Roadmap.sh code
// function calculateDiscount(price, discountPercent) {
//   return (price * discountPercent) / 100;
// }
// function calculateTax(priceAfterDiscount, taxPercent) {
//   return (priceAfterDiscount * taxPercent) / 100;
// }
// function calculateFinalPrice(price, discountPercent, taxPercent) {
//   const discount = calculateDiscount(price, discountPercent);
//   const priceAfterDiscount = price - discount;
//   const tax = calculateTax(priceAfterDiscount, taxPercent);
//   return priceAfterDiscount + tax;
// }
// function createPriceSummary(price, discountPercent, taxPercent) {
//   const discount = calculateDiscount(price, discountPercent);
//   const priceAfterDiscount = price - discount;
//   const tax = calculateTax(priceAfterDiscount, taxPercent);
//   const finalPrice = calculateFinalPrice(price, discountPercent, taxPercent);
//   return {
//     price,
//     discount,
//     tax,
//     finalPrice,
//   };
// }
// console.log(createPriceSummary(100, 20, 10));
// console.log(createPriceSummary(200, 25, 5));
// console.log(createPriceSummary(50, 0, 10));
