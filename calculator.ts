// Calculator class
class Calculator {
  // Addition
  add(a: number, b: number): number {
    this.validateNumbers(a, b);
    return a + b;
  }

  // Subtraction
  subtract(a: number, b: number): number {
    this.validateNumbers(a, b);
    return a - b;
  }

  // Multiplication
  multiply(a: number, b: number): number {
    this.validateNumbers(a, b);
    return a * b;
  }

  // Division with zero check
  divide(a: number, b: number): number {
    this.validateNumbers(a, b);
    if (b === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    return a / b;
  }

  // Private helper to validate inputs
  private validateNumbers(...nums: number[]): void {
    for (const num of nums) {
      if (typeof num !== "number" || isNaN(num)) {
        throw new Error("Invalid input: All arguments must be valid numbers.");
      }
    }
  }
}

// Example usage
try {
  const calc = new Calculator();
  console.log("Add:", calc.add(10, 5));        // 15
  console.log("Subtract:", calc.subtract(10, 5)); // 5
  console.log("Multiply:", calc.multiply(10, 5)); // 50
  console.log("Divide:", calc.divide(10, 0));     // 2
} catch (error) {
  console.error("Error:", (error as Error).message);
}

