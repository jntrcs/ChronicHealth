import { Component, OnInit, Input } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Illness } from 'src/app/models/Illness';

@Component({
  selector: 'app-survey-illness',
  templateUrl: './survey-illness.component.html',
  styleUrls: ['./survey-illness.component.scss'],
})
export class SurveyIllnessComponent  implements OnInit {


  @Input() illness!: Illness;
  @Input() is_disabled!: boolean;
  constructor(private router:Router) { 
  this.is_disabled = true;
  }

  ngOnInit() {}



    selectOption(option: string) {
      if (this.is_disabled)return;
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

    edit_illness(){
      const navigationExtras: NavigationExtras = {
        state: {
          add_to_static_survey: false,
          add_to_dynamic_survey: false,
          cancel_return_url: '/',
          success_return_url: '/',
          illness_id: this.illness.id
        }
      }
      this.router.navigate(['/illness-editor'], navigationExtras);
    }
  }


