import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService{

    personajes: Personaje[] = [
        {
            nombre: 'Goku',
            poder: 15000
        },
        {
            nombre: 'Vegetta',
            poder: 8000
        }
    ];
    
    constructor(){
        console.log('servicio iniciado');
    }

    agregarPersonaje(personaje: Personaje){
        this.personajes.push(personaje);
    }
}