import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './card/card.component';
// importaciones de angular material
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import {MatGridListModule} from '@angular/material/grid-list';
import { MatIconModule } from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
@NgModule({
  declarations: [
    CardsComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatMenuModule
  ],
  exports:[
    CardsComponent

  ]
})
export class SharedModule { }
