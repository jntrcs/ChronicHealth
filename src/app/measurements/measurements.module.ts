import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyCountMeasurementComponent } from './survey-count-measurement/survey-count-measurement.component';
import { SurveyPresentMeasurementComponent } from './survey-present-measurement/survey-present-measurement.component';
import { SurveySeverityMeasurementComponent } from './survey-severity-measurement/survey-severity-measurement.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [SurveyCountMeasurementComponent, SurveyPresentMeasurementComponent,
  SurveySeverityMeasurementComponent],
  imports: [
    CommonModule,
    IonicModule
    ],
  exports: [SurveyCountMeasurementComponent, SurveyPresentMeasurementComponent, SurveySeverityMeasurementComponent]
})
export class MeasurementsModule { }
