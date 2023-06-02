import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { StaticSurveyEditorComponent } from './survey-editor-views/static-survey-editor/static-survey-editor.component';
import { PreconfiguredSearchSymptomComponent } from './preconfigured-search/preconfigured-search-symptom/preconfigured-search-symptom.component';
import { ConfigureSymptomComponent } from './configurers/configure-symptom/configure-symptom.component';
import { PreconfiguredSearchIllnessComponent } from './preconfigured-search/preconfigured-search-illness/preconfigured-search-illness.component';
import { PreconfiguredSearchTreatmentComponent } from './preconfigured-search/preconfigured-search-treatment/preconfigured-search-treatment.component';
import { ConfigureIllnessComponent } from './configurers/configure-illness/configure-illness.component';
import { ConfigureTreatmentComponent } from './configurers/configure-treatment/configure-treatment.component';
import { ConfigureSideEffectComponentComponent } from './configurers/configure-side-effect-component/configure-side-effect-component.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
    
  },
  {
    path: 'static-survey-editor',
    component: StaticSurveyEditorComponent,
  },
  {
    path: 'preconfigured-search-symptom',
    component: PreconfiguredSearchSymptomComponent,
  },
  {
    path: 'preconfigured-search-illness',
    component: PreconfiguredSearchIllnessComponent,
  },
  {
    path: 'preconfigured-search-treatment',
    component: PreconfiguredSearchTreatmentComponent,
  },
  {
    path: 'symptom-editor',
    component: ConfigureSymptomComponent,
  },
  {
    path: 'symptom-effect-editor',
    component: ConfigureSideEffectComponentComponent,
  },
  {
    path: 'illness-editor',
    component: ConfigureIllnessComponent,
  }
  ,
  {
    path: 'treatment-editor',
    component: ConfigureTreatmentComponent,
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
