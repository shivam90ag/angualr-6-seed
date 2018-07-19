import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from './shared/services';

export const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path:'login',
        loadChildren:'./login/login.module#LoginModule'
    },
    {
        path:'register',
        loadChildren:'./register/register.module#RegisterModule'
    },
    {
        path:'dashboard',
        loadChildren:'./dashboard/dashboard.module#DashboardModule',
        canActivate:[AuthGuard]
    }
]

export const AppRouting = RouterModule.forRoot(appRoutes, {
    useHash: false
})