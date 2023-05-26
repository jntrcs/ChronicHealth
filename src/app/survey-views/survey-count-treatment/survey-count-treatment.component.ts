import { Component, OnInit, Input } from '@angular/core';
import { CountMeasurement } from 'src/app/models/Measurement';
import { Treatment } from 'src/app/models/Treatment';

@Component({
  selector: 'app-survey-count-treatment',
  templateUrl: './survey-count-treatment.component.html',
  styleUrls: ['./survey-count-treatment.component.scss'],
})
export class SurveyCountTreatmentComponent  implements OnInit {

  @Input() treatment!: Treatment;
  constructor() { }

  ngOnInit() {}

  getCountMeasurement():CountMeasurement{
    return(this.treatment.measurement as CountMeasurement)
  }
}
