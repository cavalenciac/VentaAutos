import { Component, OnInit } from "@angular/core";
import { Auto } from "src/app/datos/auto";
import { AutosService } from "src/app/shared/autos.service";


@Component({
    selector: "lista-autos",
    templateUrl: "./lista-autos.component.html"


})

export class ListaAutosComponent implements OnInit {  

tituloListaAutos: string = "Lista de Automoviles";

starList = [];
listaAutos: Auto[] = [];
listaAutosFiltrados: Auto[] = [];

imageWidth = 200;
imageMargin = 2;
muestraImagen : boolean = false;

private _filtro: string = "";



get filtro(): string {
    return this._filtro;
}
set filtro(filtro:string){
    this._filtro = filtro;
    /* console.log( this._filtro); */
    this.filtrarAutos( this._filtro);
} 

filtrarAutos( filtrarPor: string ): void{
    filtrarPor = filtrarPor.toLocaleLowerCase();
    this.listaAutosFiltrados = this.listaAutos.filter(
        ( auto: Auto ) => auto.marca.toLocaleLowerCase().includes( filtrarPor )
    )

} 

constructor(private _autosService: AutosService) {
    
}
ngOnInit(): void {
    
    this.listaAutos = this._autosService.obtenListaAutos();
    this.listaAutosFiltrados = this.listaAutos;
}

muestraImagenes(): void {
    this.muestraImagen = !this.muestraImagen;
}

onClickCalificacion( mensaje: string ):void {
alert("Dieron click en la calificacion: " + mensaje);
}

}