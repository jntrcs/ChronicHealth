import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { SurveyItemViewComponent } from '../survey-views/survey-item-view/survey-item-view.component';
import { SurveyViewsModule } from '../survey-views/survey-views.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    SurveyViewsModule,
  ],
  declarations: [Tab1Page],
  exports: []
})
export class Tab1PageModule {}
 