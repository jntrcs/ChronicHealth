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


    

    }