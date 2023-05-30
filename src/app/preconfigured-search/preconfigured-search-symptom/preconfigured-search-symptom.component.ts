import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { SurveyItem } from 'src/app/models/SurveyItem';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-preconfigured-search-symptom',
  templateUrl: './preconfigured-search-symptom.component.html',
  styleUrls: ['./preconfigured-search-symptom.component.scss'],
})
export class PreconfiguredSearchSymptomComponent  implements OnInit {

  public symptom_list: SurveyItem[];
  public source: string;
 // private all_symptoms: SurveyItem[];
  constructor(userService: UserService, private router: Router) {
    const inputs = history.state;
    
    this.source = inputs.source;
console.log(this.source);
    if (this.source === "static survey editor"){
      this.symptom_list = userService.filter_by_id(userService.get_symptoms(), userService.get_static_survey());
      console.log('hi')
    }//else if(this.source=="dynamic survey adder"){
    else{
      this.symptom_list = userService.get_symptoms();
      console.log('bye')

    }


   }

  ngOnInit() {}

  

  openSymptomCreator(){
    //if (this.source == "static survey editor"){

      const navigationExtras: NavigationExtras = {
        state: {
          add_to_static_survey: true,
          cancel_return_url: '/preconfigured-search-symptom',
          success_return_url: '/static-survey-editor'
        }
      }
    //}
    this.router.navigate(['/symptom-editor'], navigationExtras);

  }
}
