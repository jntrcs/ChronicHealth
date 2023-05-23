import { SurveyItem } from "./SurveyItem";
import { Symptom } from "./Symptom";

export class UserData {
    constructor() {
// This should load the data from memory.
//For now, just create a bunch of sample data
    this.all_symptoms =[
        new Symptom('Headache',  'severity'),
        new Symptom('Fever',  'present'),
        new Symptom('Cough',  'count'),
        new Symptom("Weak legs", 'severity'),
        new Symptom("Fatigue", 'present')
  ];

      this.static_survey = [...this.all_symptoms].slice(0,3);     
    }
  
    public all_symptoms: Symptom[];
    public static_survey: SurveyItem[];
    // public history: DayRecords[];



  }