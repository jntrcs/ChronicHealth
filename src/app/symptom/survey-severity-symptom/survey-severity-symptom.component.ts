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
  @Input() measurement!: SeverityMeasurement;

  constructor() {}

  selectOption(option: string) {
    //(this.symptom.measurement as SeverityMeasurement).severity = option;
    this.measurement.severity = option;
  }

  get_selected_option(){
    //return((this.symptom.measurement as SeverityMeasurement).severity);
    return(this.measurement.severity);
  }

  ngOnInit() {
  }


}
