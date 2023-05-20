import { Component, OnInit, Input, ViewContainerRef, ViewChild, ComponentRef, ChangeDetectorRef } from '@angular/core';
import { SurveyItem } from 'src/app/models/SurveyItem';
import { SurveySymptomComponent } from 'src/app/symptom/survey-symptom/survey-symptom.component';
import { Symptom } from 'src/app/models/Symptom';

@Component({
  selector: 'app-survey-item-view',
  templateUrl: './survey-item-view.component.html',
  styleUrls: ['./survey-item-view.component.scss'],
})
export class SurveyItemViewComponent  implements OnInit {

  @Input() survey_item!: SurveyItem;

  @ViewChild('measurementContainer', { read: ViewContainerRef })
  public measurementContainer!: ViewContainerRef;

  constructor(private cd:ChangeDetectorRef){
  }



  ngOnInit(){
  }
  ngAfterViewInit() {
    if (this.survey_item instanceof Symptom){
      const componentRef: ComponentRef<SurveySymptomComponent> = 
        this.measurementContainer.createComponent(SurveySymptomComponent)
      componentRef.instance.symptom = this.survey_item;

    }
    this.cd.detectChanges();
}
}
