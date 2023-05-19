import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveySymptomComponent } from './survey-symptom/survey-symptom.component';
import { IonicModule } from '@ionic/angular';
import { SurveyCountSymptomComponent } from './survey-count-symptom/survey-count-symptom.component';
import { SurveyPresentSymptomComponent } from './survey-present-symptom/survey-present-symptom.component';
import { SurveySeveritySymptomComponent } from './survey-severity-symptom/survey-severity-symptom.component';


@NgModule({
  imports: [
    CommonModule,
    IonicModule
      ],
    exports:[SurveySymptomComponent, SurveyCountSymptomComponent, SurveyPresentSymptomComponent,
    SurveySeveritySymptomComponent],
    declarations:[SurveySymptomComponent, SurveyCountSymptomComponent, SurveyPresentSymptomComponent,
      SurveySeveritySymptomComponent]
})
export class SymptomModule { }
 