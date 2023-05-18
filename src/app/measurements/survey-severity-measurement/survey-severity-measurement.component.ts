import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-survey-severity-measurement',
  templateUrl: './survey-severity-measurement.component.html',
  styleUrls: ['./survey-severity-measurement.component.scss'],
})
export class SurveySeverityMeasurementComponent  implements OnInit {

  selectedOption: string = 'None';

  constructor() {}

  selectOption(option: string) {
    this.selectedOption = option;
  }

  ngOnInit() {}

}
