import { CountMeasurement, Measurement, PresentMeasurement } from "./Measurement";
import { SurveyItem } from "./SurveyItem";
import { Symptom } from "./Symptom";


export class Treatment extends SurveyItem {
    constructor(
      name: string,
      //public icon: string,
      measurementString: string, 
      side_effects: Symptom[]
    ) {
      super(name);
      this.measurement = this.createMeasurement(measurementString);
      this.side_effects = side_effects;
      this.convert_symptom_measurements(this.side_effects);
    }
  
    public measurement: Measurement;
    public side_effects: Symptom[]=[];

  
    private createMeasurement(measurementString: string): Measurement {
      switch (measurementString) {
        case 'present':
          return new PresentMeasurement('treatment');
        case 'count':
          return new CountMeasurement('treatment');
        default:
          throw new Error(`Invalid measurement type: ${measurementString}`);
      }
    }

    public changeMeasurement(measurementString: string):void{
      this.measurement = this.createMeasurement(measurementString);
    }

    convert_symptom_measurements(symptoms:Symptom[]){
      for (let i = 0; i < symptoms.length; i++) {
        symptoms[i].measurement.color = "treatment";
      }        
    }

    public setSideEffects(side_effects: Symptom[]){
      this.side_effects = side_effects;
      this.convert_symptom_measurements(this.side_effects);
    }

    public override set_to_default(): void {
      
    }
  }