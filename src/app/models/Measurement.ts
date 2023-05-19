export class Measurement {
  constructor(public name: string) {}
}

export class PresentMeasurement extends Measurement {
  public isPresent: boolean = false;
  constructor(name: string) {
    super(name);
  }
}

export class CountMeasurement extends Measurement {
  public count: number = 0;
  constructor(name: string) {
    super(name);
  }
}

export class SeverityMeasurement extends Measurement {
  public severity: string = "None"
  constructor(name: string) {
    super(name);
  }
}