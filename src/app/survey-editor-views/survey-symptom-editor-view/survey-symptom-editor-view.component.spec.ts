import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SurveySymptomEditorViewComponent } from './survey-symptom-editor-view.component';

describe('SurveySymptomEditorViewComponent', () => {
  let component: SurveySymptomEditorViewComponent;
  let fixture: ComponentFixture<SurveySymptomEditorViewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveySymptomEditorViewComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SurveySymptomEditorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
