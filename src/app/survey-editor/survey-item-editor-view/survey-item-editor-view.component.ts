import { Component, OnInit, Input, ViewChild, ViewContainerRef, ComponentRef, ChangeDetectorRef } from '@angular/core';
import { SurveyItem } from 'src/app/models/SurveyItem';
import { SurveySymptomEditorViewComponent } from 'src/app/symptom/survey-symptom-editor-view/survey-symptom-editor-view.component';
import { Symptom } from 'src/app/models/Symptom';

@Component({
  selector: 'app-survey-item-editor-view',
  templateUrl: './survey-item-editor-view.component.html',
  styleUrls: ['./survey-item-editor-view.component.scss'],
})
export class SurveyItemEditorViewComponent  implements OnInit {

  @Input() survey_item!: SurveyItem;

  @ViewChild('measurementContainer', { read: ViewContainerRef })
  public measurementContainer!: ViewContainerRef;

  constructor(private cd: ChangeDetectorRef){
  }



  ngOnInit(){
  }
  ngAfterViewInit() {
    if (this.survey_item instanceof Symptom){
      const componentRef: ComponentRef<SurveySymptomEditorViewComponent> = 
        this.measurementContainer.createComponent(SurveySymptomEditorViewComponent)
      componentRef.instance.symptom = this.survey_item;

    }
    this.cd.detectChanges();
}

}
