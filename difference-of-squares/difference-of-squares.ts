class Squares {
  constructor(private number: number) {}

  get squareOfSum(): number {
    let factorialOfNumber = 0;
    for (let i = 1; i <= this.number; i++) factorialOfNumber += i;
    return Math.pow(factorialOfNumber, 2);
  }

  get sumOfSquares(): number {
    let total = 0;
    for (let i = 1; i <= this.number; i++) total += Math.pow(i, 2);
    return total;
  }

  get difference(): number {
    return this.squareOfSum - this.sumOfSquares;
  }
}

export default Squares;
