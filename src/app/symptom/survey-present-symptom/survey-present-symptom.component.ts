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
  @Input() measurement!: PresentMeasurement

  isPresent: boolean = false;

  constructor() { }

  ngOnInit() {}

  togglePresent() {
    //this.isPresent = !this.isPresent;
    //(this.symptom.measurement as PresentMeasurement).isPresent = !(this.symptom.measurement as PresentMeasurement).isPresent
    this.measurement.isPresent = !this.measurement.isPresent;
  }

}
