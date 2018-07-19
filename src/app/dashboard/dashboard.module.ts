import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import {DashboardService} from './dashboard.service'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
	  CommonModule,
	  DashboardRoutingModule,
	  FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    DashboardComponent
  ],
  providers:[DashboardService]
})

export class DashboardModule { }
