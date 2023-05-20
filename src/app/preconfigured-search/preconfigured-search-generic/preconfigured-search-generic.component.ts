import { Component, Input, OnInit } from '@angular/core';
import { SurveyItem } from 'src/app/models/SurveyItem';
import { UserService } from 'src/app/user.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-preconfigured-search-generic',
  templateUrl: './preconfigured-search-generic.component.html',
  styleUrls: ['./preconfigured-search-generic.component.scss'],
})
export class PreconfiguredSearchGenericComponent  implements OnInit {

  @Input() survey_item_list!: SurveyItem[];
  constructor(private userService: UserService, private navController: NavController) {

   }

  ngOnInit() {
  }

  addToStaticSurvey(survey_item: SurveyItem){
    this.userService.add_to_static_survey(survey_item);
    this.navController.back();


  }
}
