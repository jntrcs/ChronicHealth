import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PreconfiguredSearchSymptomComponent } from './preconfigured-search-symptom.component';

describe('PreconfiguredSearchSymptomComponent', () => {
  let component: PreconfiguredSearchSymptomComponent;
  let fixture: ComponentFixture<PreconfiguredSearchSymptomComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PreconfiguredSearchSymptomComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PreconfiguredSearchSymptomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
