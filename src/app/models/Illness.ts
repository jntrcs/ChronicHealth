import { Measurement, PresentMeasurement, 
    CountMeasurement, SeverityMeasurement } from './Measurement'
  import {SurveyItem} from './SurveyItem'
import { Symptom } from './Symptom';
  
  export class Illness extends SurveyItem {

    public doctor_confirmed: boolean;
    public symptoms: Symptom[];

      constructor(name: string, symptoms: Symptom[]) {
        super(name);
        this.doctor_confirmed = false;
        this.symptoms =symptoms;
       // this.convert_symptom_measurements(this.symptoms);
        

      }

    /*  convert_symptom_measurements(symptoms:Symptom[]){
        for (let i = 0; i < symptoms.length; i++) {
          symptoms[i].measurement.color = "illness";
        }        
      }
*/
      public setSymptoms(symptoms: Symptom[]){

        this.symptoms = symptoms;
        //this.convert_symptom_measurements(this.symptoms);
      }

      public override set_to_default(): void {
        this.symptoms.map(symptom=>symptom.set_to_default());
      }
    }