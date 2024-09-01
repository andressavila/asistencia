import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, inject, OnInit } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'shared-card',
  templateUrl: './card.component.html'
})

export class CardsComponent implements OnInit {
  constructor() { }

  ngOnInit() { }

  private breakpointObserver = inject(BreakpointObserver);

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Entradas', cols: 2, rows: 1,},
          { title: 'Salidas', cols: 2, rows: 1 },
          { title: 'Boleta', cols: 2, rows: 1 },
          { title: 'Total Salida', cols: 2, rows: 1},
        ];
      }

      return [
        { title: 'Entradas', cols: 1, rows: 1 },
        { title: 'Salidas', cols: 1, rows: 1 },
        { title: 'Boleta', cols: 1, rows: 1 },
        { title: 'Total Salida', cols: 1, rows: 1 }
      ];
    })
  );
}
