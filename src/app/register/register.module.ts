import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from './register-routing.module';
import {RegisterService} from './register.service'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
	  CommonModule,
	  RegisterRoutingModule,
	  FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    RegisterComponent
  ],
  providers:[RegisterService]
})

export class RegisterModule { }
