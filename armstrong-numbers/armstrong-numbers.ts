class ArmstrongNumbers {
  static isArmstrongNumber(potencialArmstrongNumber: number): boolean {
    const potencialArmstrongNumberInString: string = potencialArmstrongNumber.toString();
    const power = potencialArmstrongNumberInString.length;
    let total = 0;
    for (let i = 0; i < power; i++) {
      total += Math.pow(
        Number.parseInt(potencialArmstrongNumberInString.charAt(i)),
        power
      );
    }
    return total == potencialArmstrongNumber;
  }
}

export default ArmstrongNumbers;
