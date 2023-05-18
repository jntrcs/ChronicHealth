import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveySymptomComponent } from './survey-symptom/survey-symptom.component';
import { IonicModule } from '@ionic/angular';
import { MeasurementsModule } from '../measurements/measurements.module';



@NgModule({
  imports: [
    CommonModule,
    IonicModule
    ],
    exports:[SurveySymptomComponent],
    declarations:[SurveySymptomComponent]
})
export class SymptomModule { }
 