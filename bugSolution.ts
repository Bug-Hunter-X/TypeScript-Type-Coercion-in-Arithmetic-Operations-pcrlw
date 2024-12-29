function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

let result = add(5, 10); // Correct usage
console.log(result); // Prints 15

try {
  let result2 = add(5, '10'); // Throws an error
  console.log(result2);
} catch (e) {
  console.error(e.message); // Prints "Both arguments must be numbers"
}
