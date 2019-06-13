import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './components/about/about.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AboutComponent,
    DashboardComponent,
    HomeComponent],
  imports: [
    CommonModule
  ],
  exports:[
    AboutComponent,
    DashboardComponent,
    HomeComponent
  ]
})
export class AdminModule { }
