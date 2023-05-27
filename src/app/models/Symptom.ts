import { Measurement, PresentMeasurement, 
  CountMeasurement, SeverityMeasurement } from './Measurement'
import {SurveyItem} from './SurveyItem'

export class Symptom extends SurveyItem {
    constructor(
      name: string,
      //public icon: string,
      measurementString: string, 
      public is_side_effect: boolean = false
    ) {
      super(name);
      this.measurement = this.createMeasurement(measurementString);
    }
  
    public measurement: Measurement;

  
    private createMeasurement(measurementString: string): Measurement {
      switch (measurementString) {
        case 'present':
          return new PresentMeasurement(this.is_side_effect ? "side-effect" : "symptom");
        case 'count':
          return new CountMeasurement(this.is_side_effect ? "side-effect" : "symptom");
        case 'severity':
          return new SeverityMeasurement(this.is_side_effect ? "side-effect" : "symptom");
        default:
          throw new Error(`Invalid measurement type: ${measurementString}`);
      }
    }

    public changeMeasurement(measurementString: string):void{
      this.measurement = this.createMeasurement(measurementString);
    }


    
    
  }