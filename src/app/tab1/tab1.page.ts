import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { SurveyItem } from '../models/SurveyItem';
import { DayRecord } from '../models/DayRecord';
import { NavigationExtras, Router } from '@angular/router';
import { AppStateService } from '../services/app-state.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  public is_disabled:boolean;
  public static_survey: SurveyItem[];
  public dynamic_survey: SurveyItem[];
  currentDate: Date = new Date();



  constructor(private userService: UserService, private stateService: AppStateService,
     private router:Router) {
    this.static_survey = userService.get_static_survey();
    this.dynamic_survey = userService.get_dynamic_survey();
    this.is_disabled = false;
  }

  incrementDate() {
    const newDate = new Date(this.currentDate);
    newDate.setDate(newDate.getDate() + 1);
    this.currentDate = newDate;
    this.emitDateChange();
  }

  decrementDate() {
    const newDate = new Date(this.currentDate);
    newDate.setDate(newDate.getDate() - 1);
    this.currentDate = newDate;
    this.emitDateChange();
  }

  isToday(date: Date): boolean {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  }

  emitDateChange() {
    // You can emit the date change event here using Ionic's Events or EventEmitter
    // For simplicity, let's just console.log the date change
    this.stateService.survey_date = this.currentDate;
  }

  save_record(){
    this.userService.create_day_record([...this.static_survey, ...this.dynamic_survey]);
    this.is_disabled = true;
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


    if(type==='illness'){
      const navigationExtras: NavigationExtras = {
        state: {
          source: 'dynamic survey adder'
        }
      }
      this.router.navigate(['/preconfigured-search-illness'], navigationExtras);
    }

    if(type==='treatment'){
      const navigationExtras: NavigationExtras = {
        state: {
          source: 'dynamic survey adder'
        }
      }
      this.router.navigate(['/preconfigured-search-treatment'], navigationExtras);
    }

    }

}