export class ResistorColor {
  private colors: string[];
  private colorCodes: Map<string, number> = new Map();

  constructor(colors: string[]) {
    if (colors.length < 2) {
      throw new Error("At least two colors need to be present");
    }
    this.colors = colors;

    this.colorCodes.set("black", 0);
    this.colorCodes.set("brown", 1);
    this.colorCodes.set("red", 2);
    this.colorCodes.set("orange", 3);
    this.colorCodes.set("yellow", 4);
    this.colorCodes.set("green", 5);
    this.colorCodes.set("blue", 6);
    this.colorCodes.set("violet", 7);
    this.colorCodes.set("grey", 8);
    this.colorCodes.set("white", 9);
  }

  value(): number {
    let colorsInNumbers = "";
    colorsInNumbers += this.colorCodes.get(this.colors[0]);
    colorsInNumbers += this.colorCodes.get(this.colors[1]);
    return Number.parseInt(colorsInNumbers);
  }
}
