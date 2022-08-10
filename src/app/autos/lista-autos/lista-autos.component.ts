import { Component, OnInit } from "@angular/core";
import { Auto } from "src/app/datos/auto";


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

ngOnInit(): void {
    
    this.listaAutos = [
        {
            id:1,
            marca: "Mazda",
            modelo:"mx-5",
            ano:2021,
            color:"gris",
            kilometros:1000,
            calificacion:1,
            precio:50000,
            imagenUrl:"assets/imagenAutos/MazdaMX-5.jpeg"

        },
        {
            id:2,
            marca: "Porsche",
            modelo:"911",
            ano:2021,
            color:"gris",
            kilometros:2000,
            calificacion:2,
            precio:70000,
            imagenUrl:"assets/imagenAutos/Porsche911.jpeg"
        },
        {
            id:3,
            marca: "Alpine",
            modelo:"A110",
            ano:2021,
            color:"azul",
            kilometros:3000,
            calificacion:3,
            precio:80000,
            imagenUrl:"assets/imagenAutos/AlpineA110.jpeg"

        },
        {
            id:4,
            marca: "Mclaren",
            modelo:"570s",
            ano:2021,
            color:"rojo",
            kilometros:4000,
            calificacion:4,
            precio:90000,
            imagenUrl:"assets/imagenAutos/McLaren570S.jpeg"
        },
        {
            id:5,
            marca: "Nissan",
            modelo:"GT-R",
            ano:2021,
            color:"blanco",
            kilometros:5000,
            calificacion:5,
            precio:100000,
            imagenUrl:"assets/imagenAutos/NissanGT-R.jpeg"
        }
    ];
    this.listaAutosFiltrados = this.listaAutos;
}

muestraImagenes(): void {
    this.muestraImagen = !this.muestraImagen;
}

onClickCalificacion( mensaje: string ):void {
alert("Dieron click en la calificacion: " + mensaje);
}

}