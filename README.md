# TypeScript Type Coercion Bug
This example demonstrates a subtle issue in TypeScript where type coercion can lead to unexpected behavior at runtime, even though the code compiles without errors.
The `add` function is declared to take two numbers and return a number. However, when we call it with a number and a string, TypeScript allows the string to be implicitly coerced to a number, resulting in string concatenation instead of addition.
The solution involves using stricter type guards or input validation to ensure that only numbers are passed to the function.