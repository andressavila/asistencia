import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login-app',
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {


  constructor(private router:Router ) { }

  ngOnInit() { }


  hide = true;
  // evento de ,uestra la contra del input de se escribe en el usuario
   clickEvent(event: MouseEvent): void {
   this.hide = !this.hide;
  event.stopPropagation();}

  public titulo : string ='Industrial Aceitera de Casanare';

  login() {
    alert('bienvenido al sistema de asistencia');
    this.router.navigate(['control-admin'])


  }

}
