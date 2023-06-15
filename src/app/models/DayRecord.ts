import { Illness } from "./Illness";
import { IllnessRecord } from "./IllnessRecord";
import { ItemRecord } from "./ItemRecord";
import { SurveyItem } from "./SurveyItem";
import { Symptom } from "./Symptom";
import { SymptomRecord } from "./SymptomRecord";
import { Treatment } from "./Treatment";

  export class DayRecord {

    public date: Date;
    public records: ItemRecord[];

      constructor(survey: SurveyItem[]) {
        this.records = [];

        for (const item of survey) {
            if (item instanceof Symptom) {
              this.records.push(new SymptomRecord(item));
            } else if (item instanceof Illness) {
                this.records.push(new IllnessRecord(item));
              } else if (item instanceof Treatment){
                this.records.push(new TreatmentRecord(item));
              }
            }
          }

      }


    

    