import { Component, OnInit, Input } from '@angular/core';
import { CountMeasurement, Measurement, PresentMeasurement } from 'src/app/models/Measurement';
import { Treatment } from 'src/app/models/Treatment';

@Component({
  selector: 'app-survey-treatment',
  templateUrl: './survey-treatment.component.html',
  styleUrls: ['./survey-treatment.component.scss'],
})
export class SurveyTreatmentComponent  implements OnInit {

  @Input() treatment!:Treatment;
  @Input() is_disabled!:boolean;
  constructor() {
    this.is_disabled = false;
  }

  ngOnInit() {}


  isPresentMeasurement(measurement:Measurement):boolean{
    return measurement instanceof PresentMeasurement;
  }

  isCountMeasurement(measurement:Measurement):boolean{
    return measurement instanceof CountMeasurement;
  }


}
 