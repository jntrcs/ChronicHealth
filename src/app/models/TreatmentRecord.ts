import { AppStateService } from "../services/app-state.service";
import { UserService } from "../services/user.service";
import { ItemRecord } from "./ItemRecord";
import { Symptom } from "./Symptom";
import { SymptomRecord } from "./SymptomRecord";
import { Treatment } from "./Treatment";

export class TreatmentRecord extends ItemRecord{

    public side_effect_records: SymptomRecord[];
    public measurement_type: string;
    public measurement_value: string;
   // public treatment: Treatment;

    
    constructor(treatment: Treatment) {
        super(treatment.id, treatment.history_id, treatment.history_place);
       // this.treatment = treatment;
        this.measurement_type =  treatment.measurement.constructor.name;
        this.measurement_value = treatment.measurement.get_value();
        this.side_effect_records=[];
        for (const symptom of treatment.side_effects){
            this.side_effect_records.push(new SymptomRecord(symptom));
        }
      }

      override isActiveID(): string {
          if(this.isActive()){
            return this.history_id;
          }else{
            return '';
          }
      }


      isActive(): boolean{
        var treatment_present:boolean = false;
        if(this.measurement_type === "CountMeasurement" && this.measurement_value!=="0"){
            treatment_present = true;
          }else if(this.measurement_type == "PresentMeasurement" && this.measurement_value==='true'){
            treatment_present = true;
          }

        return treatment_present || 
        this.side_effect_records.map((symptom_record)=>symptom_record.isActive()).some((item) => item === true);;
      }

      override contains_hist_id(history_id: string): number {
        if (this.history_id==history_id)return(1)

        return this.side_effect_records.map(symptom_record=> {
          return symptom_record.contains_hist_id(history_id)
        }).reduce((sum, val)=>sum+val, 0)
      }

     /* set_item_to_record():void{
        this.treatment.measurement.set_value(this.measurement_value);

        this.side_effect_records.map(record => 
            this.treatment.side_effects.find((item: Symptom) => item.id === record.survey_item_id)!
            .measurement.set_value(record.value_string)
            );
        
      }*/
    

    }