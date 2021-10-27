import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`
    li{
      cursor: pointer;
    }`
  ]
})
export class PorPaisComponent implements OnInit {
  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar(termino: string){

    this.mostrarSugerencias = false;
    this.hayError = false;
    this.termino = termino;
    // console.log(this.termino);
    //se puede usar this.termino o termino son iguales
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

  sugerencias(termino: string){
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;

    this.paisService.buscarPais(termino)
      .subscribe(paises => {
        if(!paises.length){
          this.paisesSugeridos=[];
        }
        this.paisesSugeridos = paises.splice(0, 3);
      });
  }

  buscarSugerido(termino: string){
    this.buscar(termino);
  }

}
