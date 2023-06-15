import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { PresentMeasurement } from 'src/app/models/Measurement';
import { Treatment } from 'src/app/models/Treatment';

@Component({
  selector: 'app-survey-present-treatment',
  templateUrl: './survey-present-treatment.component.html',
  styleUrls: ['./survey-present-treatment.component.scss'],
})
export class SurveyPresentTreatmentComponent  implements OnInit {

  @Input() treatment!:Treatment;
  @Input() is_disabled!: boolean;

  color: string = 'treatment'
  constructor(private router:Router

  ) {
    this.is_disabled = true;
   }

  ngOnInit() {}

  getPresentMeasurement():PresentMeasurement{
    return this.treatment.measurement as PresentMeasurement;
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
