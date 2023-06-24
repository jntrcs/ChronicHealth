import { DayRecord } from "./DayRecord";
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
        new Symptom("Body Aches", "severity", false),
        new Symptom("Congestion", "count", false)
  ];


  this.all_side_effects = [new Symptom("Leg pain", 'present', true),
     new Symptom("Fatigue", "present", true),
      new Symptom("Pain", "severity", true)];
      
  this.all_treatments = [
    new Treatment("Allergy Pill", "present", []),
    new Treatment("Rituxin", "count", this.all_side_effects.slice(1,2))

  ];

  this.all_illnesses = [
    new Illness("Flu", [this.all_symptoms[4], this.all_symptoms[5]])
  ]

  this.history = new Map();
  this.history.set("6/22/2023", new DayRecord([this.all_illnesses[0],
  this.all_symptoms[1]]));


      this.static_survey = [...this.all_symptoms].slice(0,3);
      //this.static_survey.push(this.all_treatments[0])   ;
      this.static_survey.push(this.all_treatments[1]) ;
      this.dynamic_survey = [this.all_illnesses[0]];
     // this.dynamic_survey.push(this.all_illnesses[0])
     this.sortSurveyItemsByName(this.all_symptoms);
    }
  
    public all_symptoms: Symptom[];
    public all_side_effects: Symptom[];
    public all_illnesses: Illness[];
    public all_treatments: Treatment[];
    public static_survey: SurveyItem[];
    public history:  Map<string, DayRecord>;
    public dynamic_survey: SurveyItem[];



    public sortSurveyItemsByName(surveyItems: SurveyItem[]):void {
      surveyItems.sort((a, b) => a.name.localeCompare(b.name));
  }

  public determine_active_item_ids(survey_date_string: string): string[]{
// loop through the last (1) days with data
// determine what symptoms were recorded >0
//determine what treaments/illnesses are present
// filter out the ones already showing on the static survey
//return an array of SurveyItems
    const survey_date = new Date(survey_date_string);
    const date_strings = Array.from(this.history.keys());
    const dateObjects = date_strings.map((dateString) => new Date(dateString));
    //remove future dates
    const pastDates = dateObjects.filter((element) => element < survey_date);
    pastDates.sort((a, b) => b.getTime() - a.getTime());
    if(pastDates.length <1){
      return [];
    }

    var active_item_ids:string[] =[];
    for (let i = 0; i <= 0; i++) {
      // Your loop body code here
      const record: DayRecord = this.history.get(pastDates[i].toLocaleString().split(',')[0])!
      const ids: string[] = record.determineActiveConcerns();
      active_item_ids = active_item_ids.concat(ids);

    }
    return active_item_ids;

  }
}

