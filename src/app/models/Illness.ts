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
      }

    

    }