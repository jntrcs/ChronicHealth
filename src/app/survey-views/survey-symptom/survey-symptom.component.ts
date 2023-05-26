import { Component, OnInit, Input} from '@angular/core';
import { CountMeasurement, Measurement, PresentMeasurement, SeverityMeasurement } from 'src/app/models/Measurement';
import { SurveyItem } from 'src/app/models/SurveyItem';
import { Symptom } from 'src/app/models/Symptom';



@Component({
  selector: 'app-survey-symptom',
  templateUrl: 'survey-symptom.component.html',
  styleUrls: ['./survey-symptom.component.scss'],
})
export class SurveySymptomComponent  implements OnInit {
  @Input()symptom!: Symptom;


  constructor(){
  }



  ngOnInit(){

  }

  isPresentMeasurement(measurement:Measurement):boolean{
    return measurement instanceof PresentMeasurement;
  }

  isCountMeasurement(measurement:Measurement):boolean{
    return measurement instanceof CountMeasurement;
  }

  isSeverityMeasurement(measurement:Measurement):boolean{
    return measurement instanceof SeverityMeasurement;
  }

}
