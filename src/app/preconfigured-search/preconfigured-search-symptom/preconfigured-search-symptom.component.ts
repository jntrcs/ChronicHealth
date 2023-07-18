import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationExtras, Router } from '@angular/router';
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
  public edit_selected:boolean = false;
  
 // private all_symptoms: SurveyItem[];
  constructor(public userService: UserService, private router: Router) {
    const inputs = history.state;

    this.source = inputs.source;
    if (this.source === "static survey editor"){
      this.symptom_list = userService.filter_by_id(userService.get_symptoms(), userService.get_static_survey());
      this.add_to_static_survey = true;
    }else if(this.source=="dynamic survey adder"){
      this.symptom_list = userService.filter_by_id(userService.get_symptoms(), userService.get_survey());
      this.add_to_dynamic_survey = true;
    }else if(this.source=="settings"){
      this.symptom_list = userService.get_symptoms();
      this.edit_selected = true;
    }else{
      this.symptom_list = userService.get_symptoms();

    }

    /*this.router.events.subscribe((event) => {
      console.log(event);

      if (event instanceof NavigationEnd && event.url === '/preconfigured-search-symptom') {
        // This condition checks if the returned page is the home page
        this.update_symptom_list();
      }
    });*/


   }

  /* update_symptom_list(){
    console.log("updating symptom list");
    console.log(this.userService.get_symptoms());
    if (this.source === "static survey editor"){
      this.symptom_list = this.userService.filter_by_id(this.userService.get_symptoms(), this.userService.get_static_survey());
      this.add_to_static_survey = true;
    }else if(this.source=="dynamic survey adder"){
      this.symptom_list = this.userService.filter_by_id(this.userService.get_symptoms(), this.userService.get_survey());
      this.add_to_dynamic_survey = true;
    }else if(this.source=="settings"){
      this.symptom_list = this.userService.get_symptoms();
      this.edit_selected = true;
    }else{
      this.symptom_list = this.userService.get_symptoms();

    }
    console.log(this.symptom_list);
   }*/

  ngOnInit() {}

  logstuff(){
    console.log("This is the symptom_list");
    console.log(this.symptom_list);

    console.log('this is user service get symptoms');
    console.log(this.userService.get_symptoms())
  }

  

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
    } else if (this.source === 'settings') {
      navigationExtras = {
        state: {
          add_to_static_survey: false,
          add_to_dynamic_survey: false,
          cancel_return_url: '/preconfigured-search-symptom',
          success_return_url: '/preconfigured-search-symptom'
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
