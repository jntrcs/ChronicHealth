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
  @Input() color!: string
  @Input() is_disabled!: boolean;
  public pickerColumns:any;
  public pickerButtons:any;

  constructor() {
  this.is_disabled = false;
   
  }

  ngOnInit() {
    this.pickerColumns = [
      {
        name: 'count',
        options: [
          {
            text: '0',
            value: 0,
            },
          
{
  text: '1',
  value: 1,
  },
  {
  text: '2',
  value: 2,
  },
  {
  text: '3',
  value: 3,
  },
  {
  text: '4',
  value: 4,
  },
  {
  text: '5',
  value: 5,
  },
  {
  text: '6',
  value: 6,
  },
  {
  text: '7',
  value: 7,
  },
  {
  text: '8',
  value: 8,
  },
  {
  text: '9',
  value: 9,
  },
  {
  text: '10',
  value: 10,
  },
  {
  text: '11',
  value: 11,
  },
  {
  text: '12',
  value: 12,
  },
  {
  text: '13',
  value: 13,
  },
  {
  text: '14',
  value: 14,
  },
  {
  text: '15',
  value: 15,
  },
  {
  text: '16',
  value: 16,
  },
  {
  text: '17',
  value: 17,
  },
  {
  text: '18',
  value: 18,
  },
  {
  text: '19',
  value: 19,
  },
  {
  text: '20',
  value: 20,
  },
  {
  text: '21',
  value: 21,
  },
  {
  text: '22',
  value: 22,
  },
  {
  text: '23',
  value: 23,
  },
  {
  text: '24',
  value: 24,
  }
        ],
      },
    ];
  
    this.pickerButtons = [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: `picker-button-${this.color}`,
      },
      {
        text: 'Select',
        handler: (value:any) => {
          this.measurement.count = value.count.value;
        },
      cssClass: `picker-button-${this.color}`,
      },
    ];
  }

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
