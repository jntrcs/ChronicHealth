import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SurveySeveritySymptomComponent } from './survey-severity-symptom.component';

describe('SurveySeveritySymptomComponent', () => {
  let component: SurveySeveritySymptomComponent;
  let fixture: ComponentFixture<SurveySeveritySymptomComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveySeveritySymptomComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SurveySeveritySymptomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
