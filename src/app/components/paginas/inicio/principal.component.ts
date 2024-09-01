import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'inicio-admin',
  template:`
<mat-toolbar class=" shadow-md" >
  <span>{{rol}}</span>
</mat-toolbar>
<div class="">
<shared-card></shared-card>
</div>

`
})

export class InicioComponent implements OnInit {
public rol : string ='Control Administrador';

  constructor() { }

  ngOnInit() { }
}
