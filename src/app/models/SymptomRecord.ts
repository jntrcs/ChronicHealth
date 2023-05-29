import { ItemRecord } from "./ItemRecord";
import { Symptom } from "./Symptom";

export class SymptomRecord extends ItemRecord{

    public symptom_id: string;
    public measurement_type: string;
    public value_string: string;
    
    constructor(symptom: Symptom) {
        super();
        this.symptom_id = symptom.id;
        this.measurement_type =  symptom.measurement.constructor.name;
        this.value_string = symptom.measurement.get_value();
      }


    

    }