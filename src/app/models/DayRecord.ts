import { ItemRecord } from "./ItemRecord";
import { SurveyItem } from "./SurveyItem";
import { Symptom } from "./Symptom";
import { SymptomRecord } from "./SymptomRecord";

  export class DayRecord {

    public date: Date;
    public records: ItemRecord[];

      constructor(survey: SurveyItem[], date: Date = new Date()) {
        this.date = date;
        this.records = [];

        for (const item of survey) {
            if (item instanceof Symptom) {
              this.records.push(new SymptomRecord(item));
            } 
            }
          }

      }


    

    