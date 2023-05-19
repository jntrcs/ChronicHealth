import { Component, OnInit, Input } from '@angular/core';
import { SurveyItem } from 'src/app/models/SurveyItem';
import { Symptom } from 'src/app/models/Symptom';
import { ConfirmationModal } from 'src/app/generic-ui/confirmation-modal-component/confirmation-modal.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-static-survey-editor',
  templateUrl: './static-survey-editor.component.html',
  styleUrls: ['./static-survey-editor.component.scss'],
})
export class StaticSurveyEditorComponent  implements OnInit {

  public survey_list: SurveyItem[] = [
    new Symptom('Headache', 'bandage-outline', 'severity'),
    new Symptom('Fever', 'bandage-outline', 'present'),
    new Symptom('Cough', 'bandage-outline', 'count')
    // Add more symptoms here as needed
  ];

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  reorderItems(event: any) {
    const draggedItem = this.survey_list.splice(event.detail.from, 1)[0];
    this.survey_list.splice(event.detail.to, 0, draggedItem);
    event.detail.complete();
  }

  async deleteSurveyItem(survey_item: SurveyItem) {
    console.log(SurveyItem);
    const confirmationModal = await this.modalController.create({
      component: ConfirmationModal,
      componentProps: {
        message: 'Are you sure you want to delete this item?'
      }
    });
  
    await confirmationModal.present();
  
    const { data } = await confirmationModal.onDidDismiss();
    if (data && data.confirmed) {
      const index = this.survey_list.findIndex(item => item.id === survey_item.id);
      if (index !== -1) {
        this.survey_list.splice(index, 1);
      }
    }
  }

  editSurveyItem(survey_item: SurveyItem){

  }
}

