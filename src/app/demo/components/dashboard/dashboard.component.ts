import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Product } from '../../api/product';
import { ProductService } from '../../service/product.service';
import { Subscription } from 'rxjs';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { formatDate } from '@angular/common';

@Component({
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit, OnDestroy {

    date={startDate:formatDate(new Date(),'dd/MM/yyyy','en-US'),endDate:formatDate(new Date(),'dd/MM/yyyy','en-US')}
    chartname:String = 'Test Chart No1'
    constructor() {}

    ngOnInit() {}

    ngOnDestroy() {}
}
