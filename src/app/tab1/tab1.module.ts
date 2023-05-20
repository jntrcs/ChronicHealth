import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { SymptomModule } from '../symptom/symptom.module';
import { SurveyItemViewComponent } from './survey-item-view/survey-item-view.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    SymptomModule
  ],
  declarations: [Tab1Page, SurveyItemViewComponent],
  exports: [SurveyItemViewComponent]
})
export class Tab1PageModule {}
 