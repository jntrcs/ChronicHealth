import { Component, OnInit, Input } from '@angular/core';
import { Symptom } from 'src/app/models/Symptom';
import {RangeValue} from '@ionic/core';
import { RangeCustomEvent } from '@ionic/angular';
import { CountMeasurement } from 'src/app/models/Measurement';

@Component({
  selector: 'app-survey-count-symptom',
  templateUrl: './survey-count-symptom.component.html',
  styleUrls: ['./survey-count-symptom.component.scss'],
})
export class SurveyCountSymptomComponent  implements OnInit {

  @Input() symptom!: Symptom;

  ngOnInit() {}

  count: RangeValue | undefined;

  constructor(){
  }



  getCountMeasurement():CountMeasurement{
    return(this.symptom.measurement as CountMeasurement)
  }
}
