import { Component, OnInit } from '@angular/core';



export interface PeriodicElement {
  // interface de datos de la tabla
  name: string;
  position: number;
  weight: number;
  symbol: string;
  horas : number;
}
// data de nuestra table de empleabilidad de control de datos de entrada
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'raul perez mesarifher', weight: 0.9022024 , symbol: 'aipa', horas:1255},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', horas:1255},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', horas:1255},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', horas:1255},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', horas:12.55},
];


@Component({
  selector: 'table-empleados',
  templateUrl: './tablas-empleado.component.html'
})


export class tableComponent implements OnInit {
  constructor() { }

  ngOnInit() { }

  displayedColumns: string[] = ['position', 'name', 'weight','horas','symbol'];
  dataSource = ELEMENT_DATA;

}
