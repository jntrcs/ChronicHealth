import { Component, Input, OnInit } from '@angular/core';
import { RangeCustomEvent } from '@ionic/angular';
import { CountMeasurement } from 'src/app/models/Measurement';

@Component({
  selector: 'app-count-view',
  templateUrl: './count-view.component.html',
  styleUrls: ['./count-view.component.scss'],
})
export class CountViewComponent  implements OnInit {

  @Input() measurement!: CountMeasurement
  constructor() { }

  ngOnInit() {}

  updateCount(event: Event) {
    this.measurement.count = Number((event as RangeCustomEvent).detail.value)
    //this.symptom.measurement.count = Number((event as RangeCustomEvent).detail.value);
     //this.count = event.detail.value as number;
   }
 
   getCount(){
     return(this.measurement.count)
    //return(this.measurement.count)
   }
}
