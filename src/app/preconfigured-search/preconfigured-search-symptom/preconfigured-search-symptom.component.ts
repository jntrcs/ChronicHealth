import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(userService: UserService, private router: Router) {
    this.symptom_list = userService.filter_by_id(userService.get_symptoms(), userService.get_static_survey());
   }

  ngOnInit() {}

  

  openSymptomCreator(){
    this.router.navigate(['/symptom-editor']);

  }
}
