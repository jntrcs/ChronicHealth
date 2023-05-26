import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SurveyTreatmentComponent } from './survey-treatment/survey-treatment.component';
import { SurveySymptomComponent } from './survey-symptom/survey-symptom.component';
import { SurveySeveritySymptomComponent } from './survey-severity-symptom/survey-severity-symptom.component';
import { SurveyPresentSymptomComponent } from './survey-present-symptom/survey-present-symptom.component';
import { SurveyCountSymptomComponent } from './survey-count-symptom/survey-count-symptom.component';
import { SurveyItemViewComponent } from './survey-item-view/survey-item-view.component';



@NgModule({
  declarations: [SurveyTreatmentComponent, SurveySymptomComponent,SurveySeveritySymptomComponent,
  SurveyPresentSymptomComponent, SurveySeveritySymptomComponent, SurveyCountSymptomComponent,
  SurveyItemViewComponent],
  imports: [
    CommonModule, IonicModule
  ],
  exports: [SurveyTreatmentComponent, SurveySymptomComponent,SurveySeveritySymptomComponent,
    SurveyPresentSymptomComponent, SurveySeveritySymptomComponent, SurveyCountSymptomComponent,
    SurveyItemViewComponent]
})
export class SurveyViewsModule { }
