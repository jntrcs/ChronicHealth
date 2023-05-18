import { Component, OnInit } from '@angular/core';
import { RangeCustomEvent } from '@ionic/angular';
import { RangeValue } from '@ionic/core';

@Component({
  selector: 'app-survey-count-measurement',
  templateUrl: './survey-count-measurement.component.html',
  styleUrls: ['./survey-count-measurement.component.scss'],
})
export class SurveyCountMeasurementComponent  implements OnInit {

  count: RangeValue | undefined;

  constructor(){
    this.count=0
  }

  updateCount(event: Event) {
    this.count = (event as RangeCustomEvent).detail.value
    //this.count = event.detail.value as number;
  }

  ngOnInit() {}

}
