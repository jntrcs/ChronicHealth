import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { SurveyItem } from 'src/app/models/SurveyItem';
import { UserService } from 'src/app/user.service';

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

  constructor(private userService: UserService, private router:Router) {
    this.treatment_list = [];

    const inputs = history.state;

    this.source = inputs.source;
    if (this.source === "dynamic survey adder"){
      this.treatment_list = userService.filter_by_id(userService.get_treatments(), userService.get_survey());

    }else if (this.source==="static survey editor"){
      this.treatment_list = userService.filter_by_id(userService.get_treatments(), userService.get_static_survey());
      this.add_to_dynamic_survey = false;
      this.add_to_static_survey = true;
    }
   }

  ngOnInit() {}

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

  }
  this.router.navigate(['/treatment-editor'], navigationExtras);

}

}
