import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './card-compoenent/card.component';
// importaciones de angular material
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
@NgModule({
  declarations: [
    CardsComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule
  ],
  exports:[
    CardsComponent

  ]
})
export class SharedModule { }
