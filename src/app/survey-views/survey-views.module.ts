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
import { SurveyPresentTreatmentComponent } from './survey-present-treatment/survey-present-treatment.component';
import { SurveyCountTreatmentComponent } from './survey-count-treatment/survey-count-treatment.component';
import { SurveyIllnessComponent } from './survey-illness/survey-illness.component';
import { CompactSymptomComponent } from './compact-symptom/compact-symptom.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [SurveyTreatmentComponent, SurveySymptomComponent,SurveySeveritySymptomComponent,
  SurveyPresentSymptomComponent, SurveySeveritySymptomComponent, SurveyCountSymptomComponent,
  SurveyItemViewComponent, CountViewComponent, SeverityViewComponent, PresentViewComponent,
  SurveyPresentTreatmentComponent, SurveyCountTreatmentComponent, SurveyIllnessComponent, CompactSymptomComponent],
  imports: [
    CommonModule, IonicModule, FormsModule
  ],
  exports: [SurveyTreatmentComponent, SurveySymptomComponent,SurveySeveritySymptomComponent,
    SurveyPresentSymptomComponent, SurveySeveritySymptomComponent, SurveyCountSymptomComponent,
    SurveyItemViewComponent, CountViewComponent, SeverityViewComponent, PresentViewComponent,
    SurveyPresentTreatmentComponent, SurveyCountTreatmentComponent, SurveyIllnessComponent, CompactSymptomComponent]
})
export class SurveyViewsModule { }
