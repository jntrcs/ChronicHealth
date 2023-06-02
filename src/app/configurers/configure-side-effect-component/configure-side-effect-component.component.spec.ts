import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConfigureSideEffectComponentComponent } from './configure-side-effect-component.component';

describe('ConfigureSideEffectComponentComponent', () => {
  let component: ConfigureSideEffectComponentComponent;
  let fixture: ComponentFixture<ConfigureSideEffectComponentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigureSideEffectComponentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConfigureSideEffectComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
