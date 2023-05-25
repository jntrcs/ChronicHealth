import { CountMeasurement, Measurement, PresentMeasurement } from "./Measurement";
import { SideEffect } from "./SideEffect";
import { SurveyItem } from "./SurveyItem";


export class Treatment extends SurveyItem {
    constructor(
      name: string,
      //public icon: string,
      measurementString: string, 
    ) {
      super(name);
      this.measurement = this.createMeasurement(measurementString);
    }
  
    public measurement: Measurement;
    public side_effects: SideEffect[]=[];

  
    private createMeasurement(measurementString: string): Measurement {
      switch (measurementString) {
        case 'present':
          return new PresentMeasurement();
        case 'count':
          return new CountMeasurement();
        default:
          throw new Error(`Invalid measurement type: ${measurementString}`);
      }
    }

    public changeMeasurement(measurementString: string):void{
      this.measurement = this.createMeasurement(measurementString);
    }
  }