import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SurveyTreatmentComponent } from './survey-treatment/survey-treatment.component';



@NgModule({
  declarations: [SurveyTreatmentComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [SurveyTreatmentComponent]
})
export class TreatmentModule { }
