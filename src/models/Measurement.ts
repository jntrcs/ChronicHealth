export class Measurement {
  constructor(public name: string) {}
}

export class PresentMeasurement extends Measurement {
  constructor(name: string) {
    super(name);
  }
}

export class CountMeasurement extends Measurement {
  constructor(name: string, public unit: string) {
    super(name);
  }
}

export class SeverityMeasurement extends Measurement {
  constructor(name: string, public scale: string) {
    super(name);
  }
}
