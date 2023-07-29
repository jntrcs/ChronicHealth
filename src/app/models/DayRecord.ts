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
    public active_illness_ids: string[];
    public expiring_illness_ids: string[];

      constructor(survey: SurveyItem[]) {
        this.records = [];
        this.active_illness_ids = [];
        this.expiring_illness_ids = [];

        for (const item of survey) {
            if (item instanceof Symptom) {
              this.records.push(new SymptomRecord(item));
            } else if (item instanceof Illness) {
                const illness_record = new IllnessRecord(item)
                this.records.push(illness_record);
                if (illness_record.isActive()){
                  this.active_illness_ids.push(illness_record.survey_item_id);
                }else{
                  this.expiring_illness_ids.push(illness_record.survey_item_id);
                }
              } else if (item instanceof Treatment){
                this.records.push(new TreatmentRecord(item));
              }
            }
            //console.log(this.records);
          }

      determineActiveConcerns():string[]{
        // Loop through all the records and determine if the concern is active
        // return an array of all active ids
        return this.records.map((record) =>record.isActiveID()).filter((item) => item !== ''); 
      }

      getConfirmedStatus(illness_id: string):boolean{
        const illness = (this.records.filter(record => record.survey_item_id ===illness_id).pop() as IllnessRecord)
        return(illness.doctor_confirmed==='true');
      }
     // set_survey_item_values(){
      //  this.records.map((item)=>item.set_item_to_record());
      //}
          

      
  }


    

    