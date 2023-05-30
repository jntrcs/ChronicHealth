import { Component, Input, OnInit } from '@angular/core';
import { SurveyItem } from 'src/app/models/SurveyItem';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preconfigured-search-generic',
  templateUrl: './preconfigured-search-generic.component.html',
  styleUrls: ['./preconfigured-search-generic.component.scss'],
})
export class PreconfiguredSearchGenericComponent  implements OnInit {

  filtered_survey_items: SurveyItem[] = [];

  @Input() survey_item_list!: SurveyItem[];

  constructor(private userService: UserService, private router: Router) {
 
   }

  ngOnInit() {
    this.filtered_survey_items = this.survey_item_list;
  }

  filterItems(event: any) {
    if (!event || !event.target) {
      // Handle the case when event.target is null or undefined
      return;
    }
    const searchTerm = event.target.value;


    // If the search term is empty, show all survey items
    if (!searchTerm || searchTerm.trim() === '') {
      this.filtered_survey_items = this.survey_item_list;
      return;
    }

    // Filter the survey items based on the search term
    this.filtered_survey_items = this.survey_item_list.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );


  }

  
  
  addToStaticSurvey(survey_item: SurveyItem){
    this.userService.add_to_static_survey(survey_item);
    this.router.navigate(['/static-survey-editor']);
  }

  addToDynamicSurvey(survey_item: SurveyItem){
    this.userService.add_to_static_survey(survey_item);
    this.router.navigate(['/static-survey-editor']);
  }
}
