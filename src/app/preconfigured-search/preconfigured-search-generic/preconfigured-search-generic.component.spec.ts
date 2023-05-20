import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PreconfiguredSearchGenericComponent } from './preconfigured-search-generic.component';

describe('PreconfiguredSearchGenericComponent', () => {
  let component: PreconfiguredSearchGenericComponent;
  let fixture: ComponentFixture<PreconfiguredSearchGenericComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PreconfiguredSearchGenericComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PreconfiguredSearchGenericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
