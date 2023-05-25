import { Component, OnInit, Input } from '@angular/core';
import { Treatment } from 'src/app/models/Treatment';

@Component({
  selector: 'app-survey-treatment',
  templateUrl: './survey-treatment.component.html',
  styleUrls: ['./survey-treatment.component.scss'],
})
export class SurveyTreatmentComponent  implements OnInit {

  @Input() treatment!:Treatment;
  constructor() { }

  ngOnInit() {}

}
