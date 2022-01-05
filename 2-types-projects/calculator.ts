/**
 * Let's make a calculator 🧮
 */

type Operation = "add" | "substract" | "multiply" | "divide" | "remainder";

const calculate = (operation: Operation, firstNumber: number, secondNumber: number): number => {
  if (operation === "add") {
    return firstNumber + secondNumber;
  } else if (operation === "substract") {
    return firstNumber - secondNumber;
  } else if (operation === "multiply") {
    return firstNumber * secondNumber;
  } else if (operation === "divide") {
    return firstNumber / secondNumber;
  } else if (operation === "remainder") {
    return firstNumber % secondNumber;
  } else {
    throw new Error("Unknown operation");
  }
};

console.log(calculate("add", 1, 3)); // 4
console.log(calculate("substract", 3, 1)); // 2
console.log(calculate("multiply", 4, 2)); // 8
console.log(calculate("divide", 4, 2)); // 2
console.log(calculate("remainder", 5, 2)); // 1
