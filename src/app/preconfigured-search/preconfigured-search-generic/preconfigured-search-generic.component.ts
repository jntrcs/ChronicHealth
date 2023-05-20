import { Component, Input, OnInit } from '@angular/core';
import { SurveyItem } from 'src/app/models/SurveyItem';

@Component({
  selector: 'app-preconfigured-search-generic',
  templateUrl: './preconfigured-search-generic.component.html',
  styleUrls: ['./preconfigured-search-generic.component.scss'],
})
export class PreconfiguredSearchGenericComponent  implements OnInit {

  @Input() survey_item_list!: SurveyItem[];
  constructor() {

   }

  ngOnInit() {
    console.log(this.survey_item_list)
  }

}
