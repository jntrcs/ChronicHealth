import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {



  constructor(private router: Router) {}

  goToStaticSurveyEditor() {
    this.router.navigate(['/static-survey-editor']);

  }

  goToSymptomListEditor(type: string) {
      if (type==='symptom'){
        const navigationExtras: NavigationExtras = {
          state: {
            source: 'settings'
          }
        }
        this.router.navigate(['/preconfigured-search-symptom'], navigationExtras);
  
      }else if (type==='treatment'){
        const navigationExtras: NavigationExtras = {
          state: {
            source: 'settings'
          }
        }
        this.router.navigate(['/preconfigured-search-treatment'], navigationExtras);
      }else if (type==='illness'){
        const navigationExtras: NavigationExtras = {
          state: {
            source: 'settings'
          }
        }
        this.router.navigate(['/preconfigured-search-illness'], navigationExtras);
      }
  
  
  }

}
