import { Component, OnInit, Input } from '@angular/core';
import { SurveyItem } from 'src/app/models/SurveyItem';
import { ConfirmationModal } from 'src/app/generic-ui/confirmation-modal-component/confirmation-modal.component';
import { ModalController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';
import { NavigationExtras, Router } from '@angular/router';
import { Symptom } from 'src/app/models/Symptom';

@Component({
  selector: 'app-static-survey-editor',
  templateUrl: './static-survey-editor.component.html',
  styleUrls: ['./static-survey-editor.component.scss'],
})
export class StaticSurveyEditorComponent  implements OnInit {

  public survey_list: SurveyItem[];

  constructor(private modalController: ModalController, private userService: UserService, private router: Router ) {
    this.survey_list = userService.get_static_survey();
   }

  ngOnInit() {}

  reorderItems(event: any) {
    const draggedItem = this.survey_list.splice(event.detail.from, 1)[0];
    this.survey_list.splice(event.detail.to, 0, draggedItem);
    event.detail.complete();
  }

  async deleteSurveyItem(survey_item: SurveyItem) {
    const confirmationModal = await this.modalController.create({
      component: ConfirmationModal,
      componentProps: {
        message: 'Are you sure you want to remove this item from your survey?'
      }
    });
  
    await confirmationModal.present();
  
    const { data } = await confirmationModal.onDidDismiss();
    if (data?.confirmed) {
      const index = this.survey_list.findIndex(item => item.id === survey_item.id);
      if (index !== -1) {
        this.userService.remove_from_static_survey(index);
      }
    }
  }

  openPreConfiguredSearch(type: string){
    if (type==='symptom'){
      const navigationExtras: NavigationExtras = {
        state: {
          source: 'static survey editor'
        }
      }
      this.router.navigate(['/preconfigured-search-symptom'], navigationExtras);

    }else if (type==='treatment'){
      const navigationExtras: NavigationExtras = {
        state: {
          source: 'static survey editor'
        }
      }
      this.router.navigate(['/preconfigured-search-treatment'], navigationExtras);
    }


  }

  editSurveyItem(survey_item: SurveyItem){
    if (survey_item instanceof Symptom){
      const navigationExtras: NavigationExtras = {
        state: {
          add_to_static_survey: false,
          add_to_dynamic_survey: false,
          cancel_return_url: '/static-survey-editor',
          success_return_url: '/static-survey-editor',
          symptom_id: survey_item.id
        }
      }
      this.router.navigate(['/symptom-editor'], navigationExtras);
  
    }

  }
}

