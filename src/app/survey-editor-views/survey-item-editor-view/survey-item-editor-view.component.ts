import { Component, OnInit, Input} from '@angular/core';
import { SurveyItem } from 'src/app/models/SurveyItem';
import { SurveySymptomEditorViewComponent } from 'src/app/survey-editor-views/survey-symptom-editor-view/survey-symptom-editor-view.component';
import { Symptom } from 'src/app/models/Symptom';

@Component({
  selector: 'app-survey-item-editor-view',
  templateUrl: './survey-item-editor-view.component.html',
  styleUrls: ['./survey-item-editor-view.component.scss'],
})
export class SurveyItemEditorViewComponent  implements OnInit {

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
