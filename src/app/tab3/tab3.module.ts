import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab3PageRoutingModule } from './tab3-routing.module';
import { ConfigurersModule } from '../configurers/configurers.module';
import { StaticSurveyEditorComponent } from '../survey-editor-views/static-survey-editor/static-survey-editor.component';
import { SurveyEditorViewsModule } from '../survey-editor-views/survey-editor-views.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab3PageRoutingModule,
    SurveyEditorViewsModule,
    ConfigurersModule
  ],
  declarations: [Tab3Page]
})
export class Tab3PageModule {}
