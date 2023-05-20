import { Component, OnInit } from '@angular/core';
import { SurveyItem } from 'src/app/models/SurveyItem';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-preconfigured-search-symptom',
  templateUrl: './preconfigured-search-symptom.component.html',
  styleUrls: ['./preconfigured-search-symptom.component.scss'],
})
export class PreconfiguredSearchSymptomComponent  implements OnInit {

  public symptom_list: SurveyItem[];
 // private all_symptoms: SurveyItem[];
  constructor(userService: UserService) {
    this.symptom_list = userService.filter_by_id(userService.get_symptoms(), userService.get_static_survey());
   }

  ngOnInit() {}

  

  openSymptomCreator(){

  }
}
