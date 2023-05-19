import { Component, OnInit, Input } from '@angular/core';
import { SurveyItem } from 'src/app/models/SurveyItem';

@Component({
  selector: 'app-survey-item-editor-view',
  templateUrl: './survey-item-editor-view.component.html',
  styleUrls: ['./survey-item-editor-view.component.scss'],
})
export class SurveyItemEditorViewComponent  implements OnInit {

  @Input() survey_item!: SurveyItem;
  constructor() { }

  ngOnInit() {}

}
