import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './components/paginas/inicio/principal.component';
import { EmpleadoComponent } from './components/paginas/entradas/empleado-entrada.component';
import { RegistroComponent } from './components/registro/registro.component';


const routes: Routes = [

 {path:'', component:LoginComponent},
 {path:'***', redirectTo:'login', pathMatch:'full'},
 {path:'login',component:LoginComponent},
 {path:'control-admin',component:DashboardAdminComponent,
  children:[
    {path:'inicio',component:InicioComponent},
    {path:'entradaempleado', component:EmpleadoComponent},
    {path:'registroempleado', component:RegistroComponent}
  ]
 }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
