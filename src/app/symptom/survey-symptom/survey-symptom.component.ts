import { Component, OnInit, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { SurveyCountMeasurementComponent } from 'src/app/measurements/survey-count-measurement/survey-count-measurement.component';
import { SurveyPresentMeasurementComponent } from 'src/app/measurements/survey-present-measurement/survey-present-measurement.component';
import { SurveySeverityMeasurementComponent } from 'src/app/measurements/survey-severity-measurement/survey-severity-measurement.component';
import { CountMeasurement, PresentMeasurement, SeverityMeasurement } from 'src/app/models/Measurement';
import { Symptom } from 'src/app/models/Symptom';


@Component({
  selector: 'app-survey-symptom',
  templateUrl: './survey-symptom.component.html',
  styleUrls: ['./survey-symptom.component.scss'],
})
export class SurveySymptomComponent  implements OnInit {
  @Input()symptom!: Symptom;

  @ViewChild('measurementContainer', { read: ViewContainerRef })
  public measurementContainer!: ViewContainerRef;

  constructor(){
  }



  ngOnInit(){

  }
  ngAfterViewInit() {
    if (this.symptom.measurement instanceof PresentMeasurement){
      console.log("present")
      console.log(this.measurementContainer)
      this.measurementContainer.createComponent(SurveyPresentMeasurementComponent)

    } else if(this.symptom.measurement instanceof CountMeasurement)
{
  this.measurementContainer.createComponent(SurveyCountMeasurementComponent)
} else if(this.symptom.measurement instanceof SeverityMeasurement){
  this.measurementContainer.createComponent(SurveySeverityMeasurementComponent)
}
  }

}
