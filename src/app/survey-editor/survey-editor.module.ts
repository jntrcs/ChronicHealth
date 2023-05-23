import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { StaticSurveyEditorComponent } from './static-survey-editor/static-survey-editor.component';
import { SurveyItemEditorViewComponent } from './survey-item-editor-view/survey-item-editor-view.component';
import { GenericUIModule } from '../generic-ui/generic-ui.module';
import { PreconfiguredSearchModule } from '../preconfigured-search/preconfigured-search.module';
import { ConfigurersModule } from '../configurers/configurers.module';



@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    GenericUIModule,
    PreconfiguredSearchModule,
    ConfigurersModule
  ],
  declarations: [StaticSurveyEditorComponent, SurveyItemEditorViewComponent],
  exports: [StaticSurveyEditorComponent, SurveyItemEditorViewComponent]
})
export class SurveyEditorModule { }
