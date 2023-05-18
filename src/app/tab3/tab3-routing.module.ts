import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab3Page } from './tab3.page';
import { StaticSurveyEditorComponent } from '../survey-editor/static-survey-editor/static-survey-editor.component';

const routes: Routes = [
  {
    path: '',
    component: Tab3Page,
  },
  {
    path: 'static-survey-editor',
    component: StaticSurveyEditorComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab3PageRoutingModule {}