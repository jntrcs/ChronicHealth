import { Component, OnInit } from '@angular/core';
import { Illness } from 'src/app/models/Illness';
import { SurveyItem } from 'src/app/models/SurveyItem';
import { UserService } from 'src/app/user.service';

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
  
  constructor(private userService: UserService) {
    this.illness_list = [];

    const inputs = history.state;

    this.source = inputs.source;
    if (this.source === "dynamic survey adder"){
      this.illness_list = userService.filter_by_id(userService.get_illnesses(), userService.get_dynamic_survey());

    }
   }

  ngOnInit() {}

  openIllnessCreator(){

  }
}
