import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AutosService } from 'src/app/shared/autos.service';
import { Auto } from 'src/app/datos/auto';


@Component({
  //selector: 'app-detalle-autos',
  templateUrl: './detalle-autos.component.html',
  styleUrls: ['./detalle-autos.component.css']
})
export class DetalleAutosComponent implements OnInit {

  tituloPagina = "Detalle de Autos"
  auto: Auto = new Auto();
  
    constructor(
    private _activatedRoute:ActivatedRoute,
    private _router:Router,
    private _autosService:AutosService) {}

    onBack():void{
      this._router.navigate(['/auto']);
    }
  
  ngOnInit(): void {
  let id = Number(this._activatedRoute.snapshot.paramMap.get('id'));
  this.auto = this._autosService.obtenAuto(id);
  this.tituloPagina += ":" + id;
  }
  onComprar(): void {
    alert( "Pendiente" );
  }

}
