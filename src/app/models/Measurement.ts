export class Measurement {
  constructor() {}
}

export class PresentMeasurement extends Measurement {
  public isPresent: boolean = false;
  constructor() {
    super();
  }
}

export class CountMeasurement extends Measurement {
  public count: number = 0;
  constructor() {
    super();
  }
}

export class SeverityMeasurement extends Measurement {
  public severity: string = "None"
  constructor() {
    super();
  }
}