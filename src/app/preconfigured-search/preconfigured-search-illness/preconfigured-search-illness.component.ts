import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationExtras, Router } from '@angular/router';
import { Illness } from 'src/app/models/Illness';
import { SurveyItem } from 'src/app/models/SurveyItem';
import { AppStateService } from 'src/app/services/app-state.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-preconfigured-search-illness',
  templateUrl: './preconfigured-search-illness.component.html',
  styleUrls: ['./preconfigured-search-illness.component.scss'],
})
export class PreconfiguredSearchIllnessComponent  implements OnInit {

  illness_list: SurveyItem[];
  source:string;
  add_to_dynamic_survey:boolean=true;
  add_to_static_survey:boolean=false; 
  public edit_selected:boolean = false;
  showAddButton=true;
  original_illness_id:string = '';
  original_history_id:string = '';

  constructor(private userService: UserService, private router:Router, private stateService:AppStateService) {
    this.illness_list = [];

    const inputs = history.state;

    this.source = inputs.source;
    this.update_illness_list();
    if (this.source == "illness_swapper"){
      this.original_illness_id = inputs.illness_id;
      this.original_history_id = inputs.history_id;
    }

   }

   update_illness_list(){
    if (this.source === "dynamic survey adder"){
      this.illness_list = this.userService.filter_by_id(this.userService.get_illnesses(), this.userService.get_dynamic_survey());

    }else if(this.source=="settings"){
      this.illness_list = this.userService.get_illnesses();
      this.edit_selected = true;
      this.add_to_dynamic_survey = false;
    }else if (this.source == "illness_swapper"){
      this.illness_list = this.userService.filter_by_id(this.userService.get_illnesses(), this.userService.get_dynamic_survey());
      this.add_to_dynamic_survey=false;
      this.add_to_static_survey = false;
      this.showAddButton = false;

    }
   }

  ngOnInit() {
    this.router.events.subscribe((event) => {

      if (event instanceof NavigationEnd && event.url === '/preconfigured-search-illness') {
        // This condition checks if the returned page is the home page
        this.update_illness_list();
      }
    });
  }

  openIllnessCreator(){


     let navigationExtras: NavigationExtras = {};
    

    if (this.source === 'dynamic survey adder') {
        navigationExtras = {
          state: {
            add_to_static_survey: false,
            add_to_dynamic_survey: true,
            cancel_return_url: '/preconfigured-search-illness',
            success_return_url: '/'
          }
        };
      }else if (this.source === 'settings') {
        navigationExtras = {
          state: {
            add_to_static_survey: false,
            add_to_dynamic_survey: false,
            cancel_return_url: '/preconfigured-search-illness',
            success_return_url: '/preconfigured-search-illness'
          }
        }}else {
        // Default navigation extras if neither condition is met
        navigationExtras = {
          state: {
            // Default values if needed
          }
        };

  }
  this.router.navigate(['/illness-editor'], navigationExtras);

}
}

