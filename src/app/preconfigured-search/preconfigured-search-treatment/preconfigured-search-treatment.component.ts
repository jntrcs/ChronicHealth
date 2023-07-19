import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationExtras, Router } from '@angular/router';
import { SurveyItem } from 'src/app/models/SurveyItem';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-preconfigured-search-treatment',
  templateUrl: './preconfigured-search-treatment.component.html',
  styleUrls: ['./preconfigured-search-treatment.component.scss'],
})
export class PreconfiguredSearchTreatmentComponent  implements OnInit {

  treatment_list: SurveyItem[];
  source:string;
  add_to_dynamic_survey:boolean=true;
  add_to_static_survey:boolean=false; 
  edit_selected :boolean = false;

  constructor(private userService: UserService, private router:Router) {
    this.treatment_list = [];

    const inputs = history.state;

    this.source = inputs.source;
      this.update_treatment_list();
   }

   update_treatment_list(){
    if (this.source === "dynamic survey adder"){
      this.treatment_list = this.userService.filter_by_id(this.userService.get_treatments(), this.userService.get_survey());

    }else if (this.source==="static survey editor"){
      this.treatment_list = this.userService.filter_by_id(this.userService.get_treatments(), this.userService.get_static_survey());
      this.add_to_dynamic_survey = false;
      this.add_to_static_survey = true;
    }
    else if (this.source==="settings"){
      this.treatment_list = this.userService.get_treatments();
      this.add_to_dynamic_survey = false;
      this.add_to_static_survey = false;
      this.edit_selected = true;
    }
   }

  ngOnInit() {
    this.router.events.subscribe((event) => {

      if (event instanceof NavigationEnd && event.url === '/preconfigured-search-treatment') {
        // This condition checks if the returned page is the home page
        this.update_treatment_list();
      }
    });
  }

  openTreatmentCreator(){
    let navigationExtras: NavigationExtras = {};
    

    if (this.source === 'dynamic survey adder') {
        navigationExtras = {
          state: {
            add_to_static_survey: false,
            add_to_dynamic_survey: true,
            cancel_return_url: '/preconfigured-search-treatment',
            success_return_url: '/'
          }
        };
      } else if (this.source==="static survey editor"){
        // Default navigation extras if neither condition is met
        navigationExtras = {
          state: {
            add_to_static_survey: true,
            add_to_dynamic_survey: false,
            cancel_return_url: '/static-survey-editor',
            success_return_url: '/static-survey-editor'
          }
        };

  } else if (this.source==="settings"){
    navigationExtras = {
      state: {
        add_to_static_survey: false,
        add_to_dynamic_survey: false,
        cancel_return_url: '/preconfigured-search-treatment',
        success_return_url: '/preconfigured-search-treatment'
      }
    }
  };
  this.router.navigate(['/treatment-editor'], navigationExtras);

}

}
