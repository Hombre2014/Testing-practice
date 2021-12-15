class Calculator {
  constructor(num1, num2) {
    this.x = num1;
    this.y = num2;
    this.add = this.x + this.y;
    this.subtract = this.x - this.y;
    this.multiply = this.x * this.y;
    this.divide = this.x / this.y;
  }
}

module.exports = Calculator;