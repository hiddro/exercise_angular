import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  personajes: Personaje[] = [];

  nuevo: Personaje = {
    nombre: 'Roshi',
    poder: 5000
  };

  constructor(private dbzService: DbzService) { //inyeccion de dependencias
    this.personajes = this.dbzService.personajes;
  }

  ngOnInit(): void {
  }

  // agregarNuevoPersonaje(argumento: Personaje){
  //   this.personajes.push(argumento);
  // }

  // cambiarNombre(event:any){
  //   console.log(event);
  // }

}
