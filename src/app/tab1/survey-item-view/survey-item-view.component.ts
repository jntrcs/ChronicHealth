import { Component, OnInit, Input } from '@angular/core';
import { SurveyItem } from 'src/app/models/SurveyItem';
import { Symptom } from 'src/app/models/Symptom';

@Component({
  selector: 'app-survey-item-view',
  templateUrl: './survey-item-view.component.html',
  styleUrls: ['./survey-item-view.component.scss'],
})
export class SurveyItemViewComponent  implements OnInit {

  @Input() survey_item!: SurveyItem;



  constructor(){
  }



  ngOnInit(){
  }

  getSymptom(surveyItem: SurveyItem): Symptom {

      return surveyItem as Symptom;

  }

  isSymptom(surveyItem: SurveyItem): boolean {
    return surveyItem instanceof Symptom;
  }

}
