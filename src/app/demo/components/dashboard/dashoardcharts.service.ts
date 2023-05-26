import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DashoardchartsService {

  constructor() { }

  getChartData(){
    return observableOf({xdata:[1,2,3,4,5,6,7,8,9],ydata:[5.5,7,6.8,3.8,8,9.8,1,10,5.05]}); 
  }
}
