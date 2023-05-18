import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { StaticSurveyEditorComponent } from './static-survey-editor/static-survey-editor.component';



@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [StaticSurveyEditorComponent],
  exports: [StaticSurveyEditorComponent]
})
export class SurveyEditorModule { }
