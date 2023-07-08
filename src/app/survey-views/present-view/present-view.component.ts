import { Component, OnInit, Input } from '@angular/core';
import { Color } from '@ionic/core';
import { PresentMeasurement } from 'src/app/models/Measurement';

@Component({
  selector: 'app-present-view',
  templateUrl: './present-view.component.html',
  styleUrls: ['./present-view.component.scss'],
})
export class PresentViewComponent  implements OnInit {

  @Input() measurement!:PresentMeasurement;
  @Input() is_disabled!:boolean;
  @Input() color!:string;
  constructor() {
    this.is_disabled = false;
   }

  ngOnInit() {}

  togglePresent() {
    //this.isPresent = !this.isPresent;
    this.measurement.isPresent = !this.measurement.isPresent
    //this.measurement.isPresent = !this.measurement.isPresent;
  }
}
