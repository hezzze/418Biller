export class Hero {
  name: string;
  val: number;
  to: string;

  constructor(name: string, val: number = 0) {
    this.name = name;
    this.val = val;
    this.to = "";
  }
}
