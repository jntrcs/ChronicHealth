import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SurveySeverityMeasurementComponent } from './survey-severity-measurement.component';

describe('SurveySeverityMeasurementComponent', () => {
  let component: SurveySeverityMeasurementComponent;
  let fixture: ComponentFixture<SurveySeverityMeasurementComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveySeverityMeasurementComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SurveySeverityMeasurementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
