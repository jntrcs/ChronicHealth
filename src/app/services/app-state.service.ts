import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  survey_date: Date;
  string_date: string;
  constructor() { 
    this.survey_date = new Date();
    this.string_date = this.stringify_date(this.survey_date);
  }

  set_date(date: Date){
    this.survey_date = date;
    this.string_date = this.stringify_date(date);
  }

  get_string_date():string{
    return this.stringify_date(this.survey_date);
  }


  stringify_date(date: Date): string {
    return(date.toLocaleString().split(',')[0]);
  }
}
