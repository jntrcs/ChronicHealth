import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { SurveyItem } from '../models/SurveyItem';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  public static_survey: SurveyItem[];

  constructor(private userService: UserService) {
    this.static_survey = userService.get_static_survey();
  }
}