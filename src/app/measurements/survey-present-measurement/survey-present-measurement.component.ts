import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-survey-present-measurement',
  templateUrl: './survey-present-measurement.component.html',
  styleUrls: ['./survey-present-measurement.component.scss'],
})
export class SurveyPresentMeasurementComponent  implements OnInit {
  isPresent: boolean = false;

  constructor() { }

  ngOnInit() {}

  togglePresent() {
    this.isPresent = !this.isPresent;
  }

}


