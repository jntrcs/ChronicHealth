import { IllnessRecord } from './IllnessRecord';
import { ItemRecord } from './ItemRecord';
import { Measurement, PresentMeasurement, 
    CountMeasurement, SeverityMeasurement } from './Measurement'
  import {SurveyItem} from './SurveyItem'
import { Symptom } from './Symptom';
import { v4 as uuidv4 } from 'uuid';

  
  export class Illness extends SurveyItem {

    public doctor_confirmed: boolean;
    public symptoms: Symptom[];

      constructor(name: string, symptoms: Symptom[],
        history_id: string,
        history_place:number ) {
        super(name, history_id, history_place);
        this.doctor_confirmed = false;
        this.symptoms =symptoms;
       // this.convert_symptom_measurements(this.symptoms);
        

      }


      static createNewIllness( name: string,
        symptoms: Symptom[]){
        const history_id: string = uuidv4();
        const history_place = 0;
        return new Illness(name, symptoms, history_id, history_place)
  
      }
  
      static createEditedIllness(name:string, symptoms: Symptom[],
          history_id: string,
          history_place:number ){
        return new Illness(name, symptoms, history_id, history_place);
  
      }

      public setSymptoms(symptoms: Symptom[]){

        this.symptoms = symptoms;
        //this.convert_symptom_measurements(this.symptoms);
      }

      public override set_to_default(): void {
        //this.doctor_confirmed = false;
        this.symptoms.map(symptom=>symptom.set_to_default());
      }

      override set_to_record(item_record: ItemRecord): SurveyItem {

        const record = item_record as IllnessRecord;
        this.doctor_confirmed = record.doctor_confirmed === 'true';

        record.symptom_records.map(record => 
            this.symptoms.find((item: Symptom) => item.id === record.survey_item_id)!
            .measurement.set_value(record.value_string)
            );
        return this;
      }
    }