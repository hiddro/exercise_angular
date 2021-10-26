import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent implements OnInit {
  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar(){
    this.hayError = false;
    // console.log(this.termino);
    this.paisService.buscarPais(this.termino).
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
