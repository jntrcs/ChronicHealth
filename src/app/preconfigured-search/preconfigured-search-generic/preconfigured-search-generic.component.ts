import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { SurveyItem } from 'src/app/models/SurveyItem';
import { UserService } from 'src/app/services/user.service';
import { NavigationExtras, Router } from '@angular/router';
import { Illness } from 'src/app/models/Illness';
import { Symptom } from 'src/app/models/Symptom';
import { Treatment } from 'src/app/models/Treatment';

@Component({
  selector: 'app-preconfigured-search-generic',
  templateUrl: './preconfigured-search-generic.component.html',
  styleUrls: ['./preconfigured-search-generic.component.scss'],
})
export class PreconfiguredSearchGenericComponent  implements OnInit {

  filtered_survey_items: SurveyItem[] = [];

  @Input() survey_item_list!: SurveyItem[];
  @Input() add_to_static_survey!: boolean;
  @Input() add_to_dynamic_survey!: boolean;
  @Input() edit_selected!: boolean;
  @Input() showAddMessage=true;
  @Input() original_illness_id='';
  @Input() original_history_id='';

  constructor(private userService: UserService, private router: Router) {
    
   }

   ngOnChanges(changes: SimpleChanges) {
    if (changes['survey_item_list']) {
      this.filtered_survey_items = this.survey_item_list;
    }
  }


  ngOnInit() {
    this.filtered_survey_items = this.survey_item_list;
  }

  filterItems(event: any) {
    if (!event || !event.target) {
      // Handle the case when event.target is null or undefined
      return;
    }
    const searchTerm = event.target.value;


    // If the search term is empty, show all survey items
    if (!searchTerm || searchTerm.trim() === '') {
      this.filtered_survey_items = this.survey_item_list;
      return;
    }

    // Filter the survey items based on the search term
    this.filtered_survey_items = this.survey_item_list.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );


  }

  process_item(survey_item:SurveyItem){
    if (this.add_to_static_survey){
      this.addToStaticSurvey(survey_item);
    }else if(this.add_to_dynamic_survey){
      this.addToDynamicSurvey(survey_item);
    }else if(this.edit_selected){
      this.editSelected(survey_item);
    } else if (this.original_illness_id!==''){
      this.swapIllness(survey_item as Illness, this.original_illness_id, this.original_history_id);
    }

  }

  swapIllness(selected_item: Illness, original_illness_id:string, original_history_id:string){
    const orig_illness = this.userService.getHistoricByID(original_history_id, original_illness_id) as Illness;

    const all_old_symptoms = orig_illness.symptoms.map(symptom=>this.userService.getLatestByID(symptom.history_id)!);
    const symptom_superset = this.userService.removeDuplicateIds(all_old_symptoms.concat(selected_item.symptoms)).map(item=>item.id);

    const new_illness = this.userService.editIllness(selected_item, selected_item.name, symptom_superset);

    this.userService.replaceItemInDynamicSurvey(orig_illness, new_illness);

    this.router.navigate(['/']);

    //remove the illness from dynamic survey (or historical??)
    //Add the new illness in it's spot (keep ordering)
    // Edit the new illness to be a superset of symptoms from the old illness and the new illness
    // Edit history and future to show the new illness in place of the old illness

  }
  
  addToStaticSurvey(survey_item: SurveyItem){
    this.userService.add_to_static_survey(survey_item);
    this.router.navigate(['/static-survey-editor']);
  }

  addToDynamicSurvey(survey_item: SurveyItem){
    survey_item.set_to_default();
    this.userService.add_to_dynamic_survey(survey_item);
    //If what is being added is an illness, eliminate any symptom in the dynamic survey that is not nested under illness
    if (survey_item.constructor.name==='Illness'){
      const illness = (survey_item as Illness);
      this.userService.filter_from_dynamic_survey(illness.symptoms);
      illness.set_confirmed_to_default();
    }
    this.router.navigate(['/']);
  }

  editSelected(survey_item: SurveyItem){
    if (survey_item instanceof Symptom){
      const navigationExtras: NavigationExtras = {
        state: {
          add_to_static_survey: false,
          add_to_dynamic_survey: false,
          cancel_return_url: '/preconfigured-search-symptom',
          success_return_url: '/preconfigured-search-symptom',
          symptom_id: survey_item.id
        }
      }
      this.router.navigate(['/symptom-editor'], navigationExtras);
  
    }
    if (survey_item instanceof Treatment){
      const navigationExtras: NavigationExtras = {
        state: {
          add_to_static_survey: false,
          add_to_dynamic_survey: false,
          cancel_return_url: '/preconfigured-search-treatment',
          success_return_url: '/preconfigured-search-treatment',
          treatment_id: survey_item.id,
          history_id: survey_item.history_id

        }
      }
      this.router.navigate(['/treatment-editor'], navigationExtras);
  
    }
    if (survey_item instanceof Illness){
      const navigationExtras: NavigationExtras = {
        state: {
          add_to_static_survey: false,
          add_to_dynamic_survey: false,
          cancel_return_url: '/preconfigured-search-illness',
          success_return_url: '/preconfigured-search-illness',
          illness_id: survey_item.id,
          history_id: survey_item.history_id
        }
      }
      this.router.navigate(['/illness-editor'], navigationExtras);
  
    }
  }
}
