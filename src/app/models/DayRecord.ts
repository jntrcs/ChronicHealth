import { AppStateService } from "../services/app-state.service";
import { UserService } from "../services/user.service";
import { Illness } from "./Illness";
import { IllnessRecord } from "./IllnessRecord";
import { ItemRecord } from "./ItemRecord";
import { SurveyItem } from "./SurveyItem";
import { Symptom } from "./Symptom";
import { SymptomRecord } from "./SymptomRecord";
import { Treatment } from "./Treatment";
import { TreatmentRecord } from "./TreatmentRecord";

  export class DayRecord {

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
            console.log(this.records);
          }

      determineActiveConcerns():string[]{
        // Loop through all the records and determine if the concern is active
        // return an array of all active ids
        return this.records.map((record) =>record.isActiveID()).filter((item) => item !== ''); 
      }

      set_survey_item_values(){
        this.records.map((item)=>item.set_item_to_record());
      }
          

      
  }


    

    