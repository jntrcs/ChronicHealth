import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { StaticSurveyEditorComponent } from './static-survey-editor/static-survey-editor.component';
import { SurveyItemEditorViewComponent } from './survey-item-editor-view/survey-item-editor-view.component';



@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [StaticSurveyEditorComponent, SurveyItemEditorViewComponent],
  exports: [StaticSurveyEditorComponent, SurveyItemEditorViewComponent]
})
export class SurveyEditorModule { }
