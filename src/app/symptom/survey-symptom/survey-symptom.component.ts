import { Component, OnInit, Input, ViewChild, ViewContainerRef, ComponentRef, ChangeDetectorRef } from '@angular/core';
import { CountMeasurement, PresentMeasurement, SeverityMeasurement } from 'src/app/models/Measurement';
import { Symptom } from 'src/app/models/Symptom';
import { SurveyPresentSymptomComponent } from '../survey-present-symptom/survey-present-symptom.component';
import { SurveyCountSymptomComponent } from '../survey-count-symptom/survey-count-symptom.component';
import { SurveySeveritySymptomComponent } from '../survey-severity-symptom/survey-severity-symptom.component';


@Component({
  selector: 'app-survey-symptom',
  template: '<ng-container #measurementContainer></ng-container>',
  styleUrls: ['./survey-symptom.component.scss'],
})
export class SurveySymptomComponent  implements OnInit {
  @Input()symptom!: Symptom;

  @ViewChild('measurementContainer', { read: ViewContainerRef })
  public measurementContainer!: ViewContainerRef;

  constructor(private cd: ChangeDetectorRef){
  }



  ngOnInit(){
  }
  ngAfterViewInit() {
    if (this.symptom.measurement instanceof PresentMeasurement){
      const componentRef: ComponentRef<SurveyPresentSymptomComponent> = this.measurementContainer.createComponent(SurveyPresentSymptomComponent)
      componentRef.instance.symptom = this.symptom;
      componentRef.instance.measurement = this.symptom.measurement;

    } else if(this.symptom.measurement instanceof CountMeasurement)
{
  const componentRef: ComponentRef<SurveyCountSymptomComponent> = this.measurementContainer.createComponent(SurveyCountSymptomComponent)
  componentRef.instance.symptom = this.symptom;
  componentRef.instance.measurement = this.symptom.measurement;


} else if(this.symptom.measurement instanceof SeverityMeasurement){
  const componentRef: ComponentRef<SurveySeveritySymptomComponent> =this.measurementContainer.createComponent(SurveySeveritySymptomComponent)
  componentRef.instance.symptom = this.symptom;
  componentRef.instance.measurement = this.symptom.measurement;


}

this.cd.detectChanges();
  }

}
