import { Component, OnInit, Input } from '@angular/core';
import { Symptom } from 'src/app/models/Symptom';

@Component({
  selector: 'app-compact-symptom',
  templateUrl: './compact-symptom.component.html',
  styleUrls: ['./compact-symptom.component.scss'],
})
export class CompactSymptomComponent  implements OnInit {

  @Input() symptom!: Symptom;
  @Input() is_disabled!: boolean;
  @Input() color!: string;
  constructor() {
   }

  ngOnInit() {}

}
