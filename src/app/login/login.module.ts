import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import {LoginService} from './login.service'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
	  CommonModule,
	  LoginRoutingModule,
	  FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    LoginComponent
  ],
  providers:[LoginService]
})

export class LoginModule { }
