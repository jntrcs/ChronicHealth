import { Component, OnInit, Input } from '@angular/core';
import { Illness } from 'src/app/models/Illness';
import { SurveyItem } from 'src/app/models/SurveyItem';
import { Symptom } from 'src/app/models/Symptom';
import { Treatment } from 'src/app/models/Treatment';

@Component({
  selector: 'app-survey-item-view',
  templateUrl: './survey-item-view.component.html',
  styleUrls: ['./survey-item-view.component.scss'],
})
export class SurveyItemViewComponent  implements OnInit {

  @Input() survey_item!: SurveyItem;
  @Input() is_disabled!:boolean;



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


  getTreatment(surveyItem: SurveyItem): Treatment {

    return surveyItem as Treatment;

}

isTreatment(surveyItem: SurveyItem): boolean {
  return surveyItem instanceof Treatment;
}

isIllness(surveyItem: SurveyItem): boolean {
  return surveyItem instanceof Illness;
}

getIllness(surveyItem: SurveyItem): Illness {

  return surveyItem as Illness;

}
}
