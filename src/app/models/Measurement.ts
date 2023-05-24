export class Measurement {
  name: string;
  constructor(name: string) {
    this.name=name;
  }
}

export class PresentMeasurement extends Measurement {
  public isPresent: boolean = false;
  constructor() {
    super('present');
  }
}

export class CountMeasurement extends Measurement {
  public count: number = 0;
  constructor() {
    super('count');
  }
}

export class SeverityMeasurement extends Measurement {
  public severity: string = "None"
  constructor() {
    super('severity');
  }
}