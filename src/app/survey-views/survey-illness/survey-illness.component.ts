import { Component, OnInit, Input } from '@angular/core';
import { Illness } from 'src/app/models/Illness';

@Component({
  selector: 'app-survey-illness',
  templateUrl: './survey-illness.component.html',
  styleUrls: ['./survey-illness.component.scss'],
})
export class SurveyIllnessComponent  implements OnInit {

  @Input() illness!: Illness;
  constructor() { }

  ngOnInit() {}

}
