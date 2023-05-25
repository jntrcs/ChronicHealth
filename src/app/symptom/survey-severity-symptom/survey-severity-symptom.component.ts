import { Component, OnInit, Input } from '@angular/core';
import { SeverityMeasurement } from 'src/app/models/Measurement';
import { Symptom } from 'src/app/models/Symptom';

@Component({
  selector: 'app-survey-severity-symptom',
  templateUrl: './survey-severity-symptom.component.html',
  styleUrls: ['./survey-severity-symptom.component.scss'],
})
export class SurveySeveritySymptomComponent  implements OnInit {
  @Input() symptom!: Symptom;

  constructor() {}

  selectOption(option: string) {
    (this.symptom.measurement as SeverityMeasurement).severity = option;
    //this.symptom.measurement.severity = option;
  }

  get_selected_option(){
    return((this.symptom.measurement as SeverityMeasurement).severity);
    //return(this.symptom.measurement.severity);
  }

  ngOnInit() {
  }


}
