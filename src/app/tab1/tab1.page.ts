import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { SurveyItem } from '../models/SurveyItem';
import { DayRecord } from '../models/DayRecord';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  public survey: SurveyItem[];

  constructor(private userService: UserService, private router:Router) {
    this.survey = userService.get_survey();
  }

  save_record(){
    this.userService.create_day_record(this.survey);
  }

  openPreConfiguredSearch(type: string){
    if(type==='symtpom'){
      this.router.navigate(['/preconfigured-search-symptom']);
    }

    }

}