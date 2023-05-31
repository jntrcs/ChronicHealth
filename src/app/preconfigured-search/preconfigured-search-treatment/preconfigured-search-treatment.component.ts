import { Component, OnInit } from '@angular/core';
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

  constructor(private userService: UserService) {
    this.treatment_list = [];

    const inputs = history.state;

    this.source = inputs.source;
    if (this.source === "dynamic survey adder"){
      this.treatment_list = userService.filter_by_id(userService.get_treatments(), userService.get_survey());

    }
   }

  ngOnInit() {}

  openTreatmentCreator(){

}

}
