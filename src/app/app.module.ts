import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

//import de angular
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatBadgeModule} from '@angular/material/badge';
import {MatCardModule} from '@angular/material/card';
// componentes del admin
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavegationComponent } from './navegation/navegation.component';
import { InicioComponent } from './components/paginas/inicio/principal.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { SharedModule } from './shared/shared.module';
import { PruebaComponent } from './prueba/prueba.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardAdminComponent,
    HeaderComponent,
    FooterComponent,
    NavegationComponent,
    InicioComponent,
    PruebaComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatLabel,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    CommonModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatBadgeModule,
    MatCardModule,
    MatGridListModule,
    SharedModule



  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
