import { Component, Input, OnInit } from '@angular/core';
import { PresentMeasurement } from 'src/app/models/Measurement';
import { Treatment } from 'src/app/models/Treatment';

@Component({
  selector: 'app-survey-present-treatment',
  templateUrl: './survey-present-treatment.component.html',
  styleUrls: ['./survey-present-treatment.component.scss'],
})
export class SurveyPresentTreatmentComponent  implements OnInit {

  @Input() treatment!:Treatment;

  color: string = 'treatment'
  constructor(

  ) { }

  ngOnInit() {}

  getPresentMeasurement():PresentMeasurement{
    return this.treatment.measurement as PresentMeasurement;
  }
}
