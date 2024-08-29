import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login-app',
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
  constructor() { }

  ngOnInit() { }


  hide = true;
  // evento de ,uestra la contra del input de se escribe en el usuario
   clickEvent(event: MouseEvent): void {
   this.hide = !this.hide;
  event.stopPropagation();


}
}
