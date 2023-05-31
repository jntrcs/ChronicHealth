import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PreconfiguredSearchTreatmentComponent } from './preconfigured-search-treatment.component';

describe('PreconfiguredSearchTreatmentComponent', () => {
  let component: PreconfiguredSearchTreatmentComponent;
  let fixture: ComponentFixture<PreconfiguredSearchTreatmentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PreconfiguredSearchTreatmentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PreconfiguredSearchTreatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
