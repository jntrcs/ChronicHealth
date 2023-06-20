import { ItemRecord } from "./ItemRecord";
import { Symptom } from "./Symptom";
import { SymptomRecord } from "./SymptomRecord";
import { Treatment } from "./Treatment";

export class TreatmentRecord extends ItemRecord{

    public treatment_id: string;
    public side_effect_records: SymptomRecord[];
    public measurement_type: string;
    public measurement_value: string;

    
    constructor(treatment: Treatment) {
        super();
        this.treatment_id = treatment.id;
        this.measurement_type =  treatment.measurement.constructor.name;
        this.measurement_value = treatment.measurement.get_value();
        this.side_effect_records=[];
        for (const symptom of treatment.side_effects){
            this.side_effect_records.push(new SymptomRecord(symptom));
        }
      }

      override isActiveID(): string {
          if(this.isActive()){
            return this.treatment_id;
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
    

    }