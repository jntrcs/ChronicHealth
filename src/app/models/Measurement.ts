export class Measurement {
  name: string;
  color: string
  constructor(name: string, color: string) {
    this.name=name;
    this.color = color;
  }
}

export class PresentMeasurement extends Measurement {
  public isPresent: boolean = false;
  constructor(color: string) {
    super('present', color);
  }
}

export class CountMeasurement extends Measurement {
  public count: number = 0;
  constructor(color:string) {
    super('count', color);
  }
}

export class SeverityMeasurement extends Measurement {
  public severity: string = "None"
  constructor(color:string) {
    super('severity', color);
  }
}