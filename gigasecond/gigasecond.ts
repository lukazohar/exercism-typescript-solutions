export default class Gigasecond {
  private gigaSecond = Math.pow(10, 9);
  constructor(private dateOriginal: Date) {}

  public date(): Date {
    const newDate: Date = new Date(this.dateOriginal.getTime());
    newDate.setSeconds(newDate.getSeconds() + this.gigaSecond);
    return newDate;
  }
}
