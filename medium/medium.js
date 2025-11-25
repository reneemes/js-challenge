function sharePizza(x, y) {
  let result = x / y;
  if (!Number.isInteger(result)) {
    result = result.toFixed(2);
  }
  return `Each person gets ${result} slices of pizza; from our ${x} slice pizza.`;
}

console.log(sharePizza(8, 2));
console.log(sharePizza(8, 3));
console.log(sharePizza(21, 20));
console.log(sharePizza(10, 3));