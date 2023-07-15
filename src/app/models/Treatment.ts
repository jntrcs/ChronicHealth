import { CountMeasurement, Measurement, PresentMeasurement } from "./Measurement";
import { SurveyItem } from "./SurveyItem";
import { Symptom } from "./Symptom";
import { v4 as uuidv4 } from 'uuid';


export class Treatment extends SurveyItem {
    constructor(
      name: string,
      //public icon: string,
      measurementString: string, 
      side_effects: Symptom[],
      history_id: string,
      history_place:number 
    ) {
      super(name, history_id, history_place);
      this.measurement = this.createMeasurement(measurementString);
      this.side_effects = side_effects;
     // this.convert_symptom_measurements(this.side_effects);
    }
  
    public measurement: Measurement;
    public side_effects: Symptom[]=[];

    static createNewTreatment( name: string,
      //public icon: string,
      measurementString: string, 
      side_effects: Symptom[]){
      const history_id: string = uuidv4();
      const history_place = 0;
      return new Treatment(name, measurementString, side_effects, history_id, history_place)

    }

    static createEditedTreatment(name:string, measurementString: string,   
      side_effects: Symptom[],
        history_id: string,
        history_place:number ){
      return new Treatment(name, measurementString, side_effects, history_id, history_place);

    }
  
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

/*    convert_symptom_measurements(symptoms:Symptom[]){
      for (let i = 0; i < symptoms.length; i++) {
        symptoms[i].measurement.color = "treatment";
      }        
    }
*/
    public setSideEffects(side_effects: Symptom[]){
      this.side_effects = side_effects;
     // this.convert_symptom_measurements(this.side_effects);
    }

    public override set_to_default(): void {
      this.measurement.set_value_to_default();
      this.side_effects.map(side_effect => side_effect.set_to_default());
    }
  }