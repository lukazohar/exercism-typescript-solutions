function isLeapYear(givenYear: number): boolean {
  return givenYear % 4 == 0 && (givenYear % 400 == 0 || givenYear % 100 != 0);
}

export default isLeapYear;
