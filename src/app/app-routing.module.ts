import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './admin/components/about/about.component';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { HomeComponent } from './admin/components/home/home.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
{path:"about", component:AboutComponent },
{path:"dashboard", component:DashboardComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
