import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

 {path:'', component:LoginComponent},
 {path:'***', redirectTo:'login', pathMatch:'full'},
 {path:'login',component:LoginComponent},
 {path:'control-admin',component:DashboardAdminComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
