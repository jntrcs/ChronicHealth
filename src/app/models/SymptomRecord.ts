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

      isActiveID(): string {
        if(this.isActive()){
          return this.symptom_id;
        }else{
          return '';
        }
      }

      isActive(): boolean{
        if(this.measurement_type === "CountMeasurement" && this.value_string!=="0"){
          return true;
        }else if(this.measurement_type == "PresentMeasurement" && this.value_string==='true'){
          return true;
        } else if (this.measurement_type=="SeverityMeasurement" &&
        (this.value_string === 'severe' || this.value_string==='moderate' || this.value_string ==='mild')){
          return true;
        }

        return false;
      }




    

    }