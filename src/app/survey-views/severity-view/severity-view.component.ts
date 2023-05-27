import { Component, Input, OnInit } from '@angular/core';
import { SeverityMeasurement } from 'src/app/models/Measurement';

@Component({
  selector: 'app-severity-view',
  templateUrl: './severity-view.component.html',
  styleUrls: ['./severity-view.component.scss'],
})
export class SeverityViewComponent  implements OnInit {

  @Input() measurement!:SeverityMeasurement
  constructor() { }

  ngOnInit() {}

  selectOption(option: string) {
    this.measurement.severity = option;
    //this.symptom.measurement.severity = option;
  }

  get_selected_option(){
    return(this.measurement.severity);
    //return(this.symptom.measurement.severity);
  }

  isSelected(choice:string):boolean{
    return(choice===this.measurement.severity)
  }

  get_unselected_class():string{

    switch (this.measurement.color) {
      case "symptom":
        return("option-labelsymptom");
      case "illness":
        return("option-labelillness");
      case "treatment":
        return("option-labelsideeffect")
      default:
        return("error")
  }
}
}
