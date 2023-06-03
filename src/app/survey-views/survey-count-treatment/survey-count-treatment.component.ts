import { Component, OnInit, Input } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { CountMeasurement } from 'src/app/models/Measurement';
import { Treatment } from 'src/app/models/Treatment';

@Component({
  selector: 'app-survey-count-treatment',
  templateUrl: './survey-count-treatment.component.html',
  styleUrls: ['./survey-count-treatment.component.scss'],
})
export class SurveyCountTreatmentComponent  implements OnInit {

  @Input() treatment!: Treatment;
  constructor(private router:Router) { }

  ngOnInit() {}

  getCountMeasurement():CountMeasurement{
    return(this.treatment.measurement as CountMeasurement)
  }

  edit_treatment(treatment:Treatment){
    const navigationExtras: NavigationExtras = {
      state: {
        add_to_static_survey: false,
        add_to_dynamic_survey: false,
        cancel_return_url: '/',
        success_return_url: '/',
        treatment_id: treatment.id
      }
    }
    this.router.navigate(['/treatment-editor'], navigationExtras);
  }
}
