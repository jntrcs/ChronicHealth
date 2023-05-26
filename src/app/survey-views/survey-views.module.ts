import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SurveyTreatmentComponent } from './survey-treatment/survey-treatment.component';
import { SurveySymptomComponent } from './survey-symptom/survey-symptom.component';
import { SurveySeveritySymptomComponent } from './survey-severity-symptom/survey-severity-symptom.component';
import { SurveyPresentSymptomComponent } from './survey-present-symptom/survey-present-symptom.component';
import { SurveyCountSymptomComponent } from './survey-count-symptom/survey-count-symptom.component';
import { SurveyItemViewComponent } from './survey-item-view/survey-item-view.component';
import { CountViewComponent } from './count-view/count-view.component';
import { SeverityViewComponent } from './severity-view/severity-view.component';
import { PresentViewComponent } from './present-view/present-view.component';



@NgModule({
  declarations: [SurveyTreatmentComponent, SurveySymptomComponent,SurveySeveritySymptomComponent,
  SurveyPresentSymptomComponent, SurveySeveritySymptomComponent, SurveyCountSymptomComponent,
  SurveyItemViewComponent, CountViewComponent, SeverityViewComponent, PresentViewComponent],
  imports: [
    CommonModule, IonicModule
  ],
  exports: [SurveyTreatmentComponent, SurveySymptomComponent,SurveySeveritySymptomComponent,
    SurveyPresentSymptomComponent, SurveySeveritySymptomComponent, SurveyCountSymptomComponent,
    SurveyItemViewComponent, CountViewComponent, SeverityViewComponent, PresentViewComponent]
})
export class SurveyViewsModule { }
