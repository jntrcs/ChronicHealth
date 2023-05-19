import { Measurement, PresentMeasurement, 
  CountMeasurement, SeverityMeasurement } from './Measurement'
import {SurveyItem} from './SurveyItem'

export class Symptom extends SurveyItem {
    constructor(
      name: string,
      public icon: string,
      measurementString: string, 
    ) {
      super(name);
      this.measurement = this.createMeasurement(measurementString);
    }
  
    public measurement: Measurement;

  
    private createMeasurement(measurementString: string): Measurement {
      switch (measurementString) {
        case 'present':
          return new PresentMeasurement('Present');
        case 'count':
          return new CountMeasurement('Count');
        case 'severity':
          return new SeverityMeasurement('Severity');
        default:
          throw new Error(`Invalid measurement type: ${measurementString}`);
      }
    }
  }