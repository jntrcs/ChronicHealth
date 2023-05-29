import { Illness } from "./Illness";
import { SurveyItem } from "./SurveyItem";
import { Symptom } from "./Symptom";
import { Treatment } from "./Treatment";

export class UserData {
    constructor() {
// This should load the data from memory.
//For now, just create a bunch of sample data
    this.all_symptoms =[
        new Symptom('Shortness of Breath',  'severity'),
        new Symptom('Fever',  'present'),
        new Symptom('Cough',  'count'),
        new Symptom("Weak legs", 'severity'),
        new Symptom("Fatigue", 'present')
  ];

  this.all_treatments = [
    new Treatment("Allergy Pill", "present", []),
    new Treatment("Rituxin", "count", [new Symptom("Fatigue", "present", true),
    new Symptom("Pain", "severity", true)])

  ];

  this.all_illnesses = [
    new Illness("Flutter fsdfsd", [new Symptom("Body Aches", "severity", false),
                        new Symptom("Congestion", "count", false)])
  ]


      this.static_survey = [...this.all_symptoms].slice(0,3);
      this.static_survey.push(this.all_treatments[0])   ;
      this.static_survey.push(this.all_treatments[1]) ;
      this.static_survey.push(this.all_illnesses[0]);
      
    }
  
    public all_symptoms: Symptom[];
    public all_illnesses: Illness[];
    public all_treatments: Treatment[];
    public static_survey: SurveyItem[];
    // public history: DayRecords[];
  }