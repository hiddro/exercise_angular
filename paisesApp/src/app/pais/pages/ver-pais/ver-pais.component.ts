import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor(private activatedRoute: ActivatedRoute,
    private paisService: PaisService) { }

  ngOnInit(): void {
    this.activatedRoute
        .params
        .pipe(
          switchMap(({id}) => {
            return this.paisService.buscarPaisCode(id);
          }),
          tap(console.log)
        )
        .subscribe(pais => {
          // console.log(pais);
          this.pais = pais;
        });
    // this.activatedRoute
    //   .params
    //   .subscribe(({id}) => {
    //     // console.log(id);

    //     this.paisService.buscarPaisCode(id).subscribe(pais => {
    //       console.log(pais);
    //     })

    //   });
  }

}
