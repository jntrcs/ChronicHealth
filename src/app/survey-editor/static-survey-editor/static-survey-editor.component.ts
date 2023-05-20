import { Component, OnInit, Input } from '@angular/core';
import { SurveyItem } from 'src/app/models/SurveyItem';
import { ConfirmationModal } from 'src/app/generic-ui/confirmation-modal-component/confirmation-modal.component';
import { ModalController } from '@ionic/angular';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-static-survey-editor',
  templateUrl: './static-survey-editor.component.html',
  styleUrls: ['./static-survey-editor.component.scss'],
})
export class StaticSurveyEditorComponent  implements OnInit {

  public survey_list: SurveyItem[];

  constructor(private modalController: ModalController, private userService: UserService ) {
    this.survey_list = userService.get_static_survey();
   }

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

