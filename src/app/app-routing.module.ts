import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { StaticSurveyEditorComponent } from './survey-editor/static-survey-editor/static-survey-editor.component';
import { PreconfiguredSearchSymptomComponent } from './preconfigured-search/preconfigured-search-symptom/preconfigured-search-symptom.component';

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
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
