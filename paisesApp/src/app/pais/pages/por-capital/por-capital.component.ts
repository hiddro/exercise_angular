import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {
  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar(termino: string){
    this.hayError = false;
    this.termino = termino;
    // console.log(this.termino);
    //se puede usar this.termino o termino son iguales
    this.paisService.buscarCapital(this.termino).
    subscribe((paisesD) => {
      if(!paisesD.length){
        this.hayError = true;
        this.paises=[];
      }
      console.log(paisesD);
      this.paises = paisesD;

    });
  }

}
