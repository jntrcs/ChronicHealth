import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { StaticSurveyEditorComponent } from './static-survey-editor/static-survey-editor.component';
import { SurveyItemEditorViewComponent } from './survey-item-editor-view/survey-item-editor-view.component';
import { SurveySymptomEditorViewComponent } from './survey-symptom-editor-view/survey-symptom-editor-view.component';
import { PreconfiguredSearchModule } from '../preconfigured-search/preconfigured-search.module';
import { GenericUIModule } from '../generic-ui/generic-ui.module';



@NgModule({
  declarations: [StaticSurveyEditorComponent, SurveyItemEditorViewComponent, SurveySymptomEditorViewComponent],
  imports: [
    CommonModule, IonicModule, PreconfiguredSearchModule, GenericUIModule
  ],
  exports: [StaticSurveyEditorComponent, SurveyItemEditorViewComponent, SurveySymptomEditorViewComponent],

})
export class SurveyEditorViewsModule { }
