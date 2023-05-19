import { Component, OnInit, Input } from '@angular/core';
import { Symptom } from 'src/app/models/Symptom';

@Component({
  selector: 'app-survey-symptom-editor-view',
  templateUrl: './survey-symptom-editor-view.component.html',
  styleUrls: ['./survey-symptom-editor-view.component.scss'],
})
export class SurveySymptomEditorViewComponent  implements OnInit {

  @Input() symptom!: Symptom;

  constructor() { }

  ngOnInit() {}

}
