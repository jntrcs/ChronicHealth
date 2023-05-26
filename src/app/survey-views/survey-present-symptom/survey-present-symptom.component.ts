import { Component, OnInit, Input } from '@angular/core';
import { PresentMeasurement } from 'src/app/models/Measurement';
import { Symptom } from 'src/app/models/Symptom';

@Component({
  selector: 'app-survey-present-symptom',
  templateUrl: './survey-present-symptom.component.html',
  styleUrls: ['./survey-present-symptom.component.scss'],
})
export class SurveyPresentSymptomComponent  implements OnInit {
  @Input() symptom!: Symptom;

  isPresent: boolean = false;

  constructor() { }

  ngOnInit() {}



  getPresentMeasurement():PresentMeasurement{
    return this.symptom.measurement as PresentMeasurement;
  }

}
