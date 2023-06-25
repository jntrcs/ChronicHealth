import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { SurveyItem } from '../models/SurveyItem';
import { DayRecord } from '../models/DayRecord';
import { NavigationExtras, Router } from '@angular/router';
import { AppStateService } from '../services/app-state.service';
import { NavController } from '@ionic/angular';

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
    this.dynamic_survey = userService.calculate_dynamic_survey(stateService.string_date);
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
    this.stateService.set_date(this.currentDate);
    this.dynamic_survey = this.userService.calculate_dynamic_survey(this.stateService.string_date);
    this.userService.set_items_to_default();
    if(this.userService.check_day_has_data(this.stateService.string_date)){
      this.is_disabled = true;
      this.userService.set_items_to_days_values(this.stateService.string_date);
    } else{
      this.is_disabled = false;
    }
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

    update_record(){
      this.is_disabled = false;
    }

    logDynamicSurvey(){
      console.log("this.dynamic_survey")
      console.log(this.dynamic_survey);
      console.log("userservice:");
      console.log(this.userService.get_dynamic_survey());
    }

}