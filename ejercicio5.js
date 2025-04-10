function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
console.log(`El factorial de 5 es: ${factorial(5)}`);