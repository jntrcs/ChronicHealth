import { Component, OnInit, Input } from '@angular/core';
import { Illness } from 'src/app/models/Illness';

@Component({
  selector: 'app-survey-illness',
  templateUrl: './survey-illness.component.html',
  styleUrls: ['./survey-illness.component.scss'],
})
export class SurveyIllnessComponent  implements OnInit {


  @Input() illness!: Illness;
  constructor() { 
  
  }

  ngOnInit() {}



    selectOption(option: string) {
      this.illness.doctor_confirmed = option==='medically confirmed';
      //this.symptom.measurement.severity = option;
    }
  
    get_selected_option(){
      if(this.illness.doctor_confirmed){
        return("medically confirmed")
      }else{
        return("suspected")
      }
      //return(this.symptom.measurement.severity);
    }

}
