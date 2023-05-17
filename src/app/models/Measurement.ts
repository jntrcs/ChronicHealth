import { Type } from '@angular/core';

import { PresentMeasurementComponent, CountMeasurementComponent, SeverityMeasurementComponent } from '../Components/MeasurementComponents';

export class Measurement {
  constructor(public name: string, public component: Type<any>) {}
}

export class PresentMeasurement extends Measurement {
  constructor(name: string) {
    super(name, PresentMeasurementComponent);
  }
}

export class CountMeasurement extends Measurement {
  constructor(name: string, public unit: string) {
    super(name, CountMeasurementComponent);
  }
}

export class SeverityMeasurement extends Measurement {
  constructor(name: string, public scale: string) {
    super(name, SeverityMeasurementComponent);
  }
}