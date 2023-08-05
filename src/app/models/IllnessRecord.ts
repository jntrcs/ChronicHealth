import { AppStateService } from "../services/app-state.service";
import { UserService } from "../services/user.service";
import { Illness } from "./Illness";
import { ItemRecord } from "./ItemRecord";
import { Symptom } from "./Symptom";
import { SymptomRecord } from "./SymptomRecord";

export class IllnessRecord extends ItemRecord{

    public symptom_records: SymptomRecord[];
    //public illness:Illness;
    public doctor_confirmed: string;

    
    constructor(illness: Illness) {
        super(illness.id, illness.history_id, illness.history_place);
        //this.illness = illness;
        this.symptom_records=[];
        for (const symptom of illness.symptoms){
            this.symptom_records.push(new SymptomRecord(symptom));
        }
        this.doctor_confirmed = illness.doctor_confirmed.toString();
      }

      isActiveID():string{
        if (this.isActive()){
          return(this.history_id);
        }else{
          return '';
        }

      }

      isActive():boolean{
        return this.symptom_records.map((symptom_record)=>symptom_record.isActive()).some((item) => item === true);
      }

      override contains_hist_id(history_id: string): number {
        if (this.history_id==history_id)return(1)

        return this.symptom_records.map(symptom_record=> {
          return symptom_record.contains_hist_id(history_id)
        }).reduce((sum, val)=>sum+val, 0)
      }
/*
      set_item_to_record():void{
        this.illness.doctor_confirmed = this.doctor_confirmed === 'true';

        this.symptom_records.map(record => 
            this.illness.symptoms.find((item: Symptom) => item.id === record.survey_item_id)!
            .measurement.set_value(record.value_string)
            );
        
      }*/

    }

    