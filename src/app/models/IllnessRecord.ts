import { Illness } from "./Illness";
import { ItemRecord } from "./ItemRecord";
import { Symptom } from "./Symptom";
import { SymptomRecord } from "./SymptomRecord";

export class IllnessRecord extends ItemRecord{

    public illness_id: string;
    public symptom_records: SymptomRecord[];

    
    constructor(illness: Illness) {
        super();
        this.illness_id = illness.id;
        this.symptom_records=[];
        for (const symptom of illness.symptoms){
            this.symptom_records.push(new SymptomRecord(symptom));
        }
      }

      isActiveID():string{
        if (this.isActive()){
          return(this.illness_id);
        }else{
          return '';
        }

      }

      isActive():boolean{
        return this.symptom_records.map((symptom_record)=>symptom_record.isActive()).some((item) => item === true);
      }

      set_item_to_record():void{

      }

    }