import { ItemRecord } from './ItemRecord';
import { Measurement, PresentMeasurement, 
  CountMeasurement, SeverityMeasurement } from './Measurement'
import {SurveyItem} from './SurveyItem'
import { v4 as uuidv4 } from 'uuid';
import { SymptomRecord } from './SymptomRecord';


export class Symptom extends SurveyItem {
    constructor(
      name: string,
      //public icon: string,
      measurementString: string, 
      history_id: string,
      history_place:number
      //public is_side_effect: boolean = false
    ) {
      super(name, history_id, history_place);
      this.measurement = this.createMeasurement(measurementString);
    }

    static createNewSymptom(name:string, measurementString: string){
      const history_id: string = uuidv4();
      const history_place = 0;
      return new Symptom(name, measurementString, history_id, history_place)

    }

    static createEditedSymptom(name:string, measurementString: string,     
        history_id: string,
        history_place:number ){
      return new Symptom(name, measurementString, history_id, history_place);

    }
  
    public measurement: Measurement;

  
    private createMeasurement(measurementString: string): Measurement {
      switch (measurementString) {
        case 'present':
          return new PresentMeasurement();
        case 'count':
          return new CountMeasurement();
        case 'severity':
          return new SeverityMeasurement();
        default:
          throw new Error(`Invalid measurement type: ${measurementString}`);
      }
    }

    public changeMeasurement(measurementString: string):void{
      this.measurement = this.createMeasurement(measurementString);
    }

    public override set_to_default(): void {
      this.measurement.set_value_to_default();
    }

    override set_to_record(item_record: ItemRecord): SurveyItem {
      const record = item_record as SymptomRecord
      this.measurement.set_value(record.value_string);
      return this;
    }

    
  }


