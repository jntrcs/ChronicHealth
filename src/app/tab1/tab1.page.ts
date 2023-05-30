import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { SurveyItem } from '../models/SurveyItem';
import { DayRecord } from '../models/DayRecord';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  public static_survey: SurveyItem[];
  public dynamic_survey: SurveyItem[];


  constructor(private userService: UserService, private router:Router) {
    this.static_survey = userService.get_static_survey();
    this.dynamic_survey = userService.get_dynamic_survey();
  }

  save_record(){
    this.userService.create_day_record([...this.static_survey, ...this.dynamic_survey]);
  }

  openPreConfiguredSearch(type: string){
    if(type==='symptom'){
      const navigationExtras: NavigationExtras = {
        state: {
          source: 'dynamic survey adder'
        }
      }
      this.router.navigate(['/preconfigured-search-symptom'], navigationExtras);
    }

    }

}