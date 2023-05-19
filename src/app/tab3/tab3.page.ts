import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Symptom } from '../models/Symptom';
import { SurveyItem } from '../models/SurveyItem';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public survey_list: SurveyItem[] = [
    new Symptom('Headache', 'bandage-outline', 'severity'),
    new Symptom('Fever', 'bandage-outline', 'present'),
    new Symptom('Cough', 'bandage-outline', 'count')
    // Add more symptoms here as needed
  ];

  constructor(private router: Router) {}

  goToStaticSurveyEditor() {
    this.router.navigate(['/static-survey-editor']);

  }

}
