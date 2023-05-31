import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PreconfiguredSearchIllnessComponent } from './preconfigured-search-illness.component';

describe('PreconfiguredSearchIllnessComponent', () => {
  let component: PreconfiguredSearchIllnessComponent;
  let fixture: ComponentFixture<PreconfiguredSearchIllnessComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PreconfiguredSearchIllnessComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PreconfiguredSearchIllnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
