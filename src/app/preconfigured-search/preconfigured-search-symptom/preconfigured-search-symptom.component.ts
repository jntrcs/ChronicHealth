import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { SurveyItem } from 'src/app/models/SurveyItem';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-preconfigured-search-symptom',
  templateUrl: './preconfigured-search-symptom.component.html',
  styleUrls: ['./preconfigured-search-symptom.component.scss'],
})
export class PreconfiguredSearchSymptomComponent  implements OnInit {

  public symptom_list: SurveyItem[];
  public source: string;
  public add_to_static_survey: boolean = false;
  public add_to_dynamic_survey: boolean = false;
  
 // private all_symptoms: SurveyItem[];
  constructor(userService: UserService, private router: Router) {
    const inputs = history.state;

    this.source = inputs.source;
    if (this.source === "static survey editor"){
      this.symptom_list = userService.filter_by_id(userService.get_symptoms(), userService.get_static_survey());
      this.add_to_static_survey = true;
    }else if(this.source=="dynamic survey adder"){
      this.symptom_list = userService.filter_by_id(userService.get_symptoms(), userService.get_survey());
      this.add_to_dynamic_survey = true;
    }else{
      this.symptom_list = userService.get_symptoms();

    }


   }

  ngOnInit() {}

  

  openSymptomCreator() {
    let navigationExtras: NavigationExtras;
  
    if (this.source === 'static survey editor') {
      navigationExtras = {
        state: {
          add_to_static_survey: true,
          add_to_dynamic_survey: false,
          cancel_return_url: '/preconfigured-search-symptom',
          success_return_url: '/static-survey-editor'
        }
      };
    } else if (this.source === 'dynamic survey adder') {
      navigationExtras = {
        state: {
          add_to_static_survey: false,
          add_to_dynamic_survey: true,
          cancel_return_url: '/preconfigured-search-symptom',
          success_return_url: '/'
        }
      };
    } else {
      // Default navigation extras if neither condition is met
      navigationExtras = {
        state: {
          // Default values if needed
        }
      };
    }

    this.router.navigate(['/symptom-editor'], navigationExtras);
  }


}
