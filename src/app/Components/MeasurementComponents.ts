import { Component } from '@angular/core';
import { RangeCustomEvent } from '@ionic/angular';
import { RangeValue } from '@ionic/core';



@Component({
  selector: 'present-measurement',
  template: `
    <ion-toggle [checked]="isPresent" (ionChange)="togglePresent()"></ion-toggle>
  `
})
export class PresentMeasurementComponent {
  isPresent: boolean = false;

  constructor() {}

  togglePresent() {
    this.isPresent = !this.isPresent;
  }
}


@Component({
  selector: 'count-measurement',
  template: `
    <ion-item class="custom-item">
      <ion-label>{{ count }}</ion-label>
      <ion-range min="0" max="24" step="1" value=0 snaps=true ticks=true (ionChange)="updateCount($event)"></ion-range>
    </ion-item>
  `,
  styles: [`
    .custom-item ion-label {
      margin-right: 0px;
    }
    .custom-item ion-range {
      margin-left: 0px;
    }
  `]
})
export class CountMeasurementComponent {
  count: RangeValue | undefined;

  constructor(){
    this.count=0
  }

  updateCount(event: Event) {
    this.count = (event as RangeCustomEvent).detail.value
    //this.count = event.detail.value as number;
  }
}









@Component({
  selector: 'severity-measurement',
  template: `
    <ion-item>
      <ion-label class="option-label" [class.selected]="selectedOption === 'None'" (click)="selectOption('None')">None</ion-label>
      <ion-label class="option-label" [class.selected]="selectedOption === 'Mild'" (click)="selectOption('Mild')">Mild</ion-label>
      <ion-label class="option-label" [class.selected]="selectedOption === 'Moderate'" (click)="selectOption('Moderate')">Moderate</ion-label>
      <ion-label class="option-label" [class.selected]="selectedOption === 'Severe'" (click)="selectOption('Severe')">Severe</ion-label>
    </ion-item>
  `,
  styles: [
    `
    .option-label {
      display: inline-block;
      padding: 1px;
      margin: 0 2px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;
      text-align: center;
      border: 1px solid transparent;
      border-color: #007bff;

    }
    
    .selected {
      background-color: #007bff;
      color: white;
      border-color: #007bff;
    }
    `
  ]
})
export class SeverityMeasurementComponent {
  selectedOption: string = 'None';

  constructor() {}

  selectOption(option: string) {
    this.selectedOption = option;
  }
}

// @Component({
//   selector: 'app-severity-measurement',
//   template: `
//     <ion-list lines="none">
//       <ion-radio-group>
//         <ion-row>
//           <ion-col size="3">
//             <ion-item>
//               <ion-label>None</ion-label>
//               <ion-radio value="None"></ion-radio>
//             </ion-item>
//           </ion-col>
//           <ion-col size="3">
//             <ion-item>
//               <ion-label>Mild</ion-label>
//               <ion-radio value="Mild"></ion-radio>
//             </ion-item>
//           </ion-col>
//           <ion-col size="3">
//             <ion-item>
//               <ion-label>Moderate</ion-label>
//               <ion-radio value="Moderate"></ion-radio>
//             </ion-item>
//           </ion-col>
//           <ion-col size="3">
//             <ion-item>
//               <ion-label>Severe</ion-label>
//               <ion-radio value="Severe"></ion-radio>
//             </ion-item>
//           </ion-col>
//         </ion-row>
//       </ion-radio-group>
//     </ion-list>
//   `
// })
// export class SeverityMeasurementComponent {
//   constructor() {}
// }