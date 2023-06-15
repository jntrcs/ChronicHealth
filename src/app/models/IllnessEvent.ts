
  import {Illness} from './Illness'
  
  export class IllnessEvent {

    public doctor_confirmed: boolean;
    public date_confirmed: Date|null;
    public illness: Illness;
    public start_date: Date|null;
    public end_date: Date|null;

      constructor(illness:Illness) {

        this.doctor_confirmed = false;
        this.date_confirmed= null;
        this.illness = illness;
        this.start_date = null;
        this.end_date = null;

      }

    

    }