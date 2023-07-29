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
    const dateWithoutTime = formatDateWithoutTime(date);
    this.survey_date = dateWithoutTime;
    this.string_date = this.stringify_date(dateWithoutTime);
  }

  get_string_date():string{
    return this.stringify_date(this.survey_date);
  }


  stringify_date(date: Date): string {
    return(date.toLocaleString().split(',')[0]);
  }
}

function formatDateWithoutTime(inputDate: Date): Date {
  const year = inputDate.getFullYear();
  const month = inputDate.getMonth();
  const day = inputDate.getDate();
  return new Date(year, month, day, 0, 0, 0, 0); // Set time to 00:00:00.000
}