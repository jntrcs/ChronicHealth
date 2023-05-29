import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { SurveyItem } from '../models/SurveyItem';
import { DayRecord } from '../models/DayRecord';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  public survey: SurveyItem[];

  constructor(private userService: UserService) {
    this.survey = userService.get_survey();
  }

  save_record(){
    this.userService.create_day_record(this.survey);
  }
}