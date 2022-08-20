import { Injectable } from "@angular/core";
import { ListaAutosComponent } from "../autos/lista-autos/lista-autos.component";
import { Auto } from "../datos/auto";

@Injectable({
    providedIn:"root"
})

export class AutosService{
    listaAutos: Auto[] = [];

    public obtenListaAutos(): Auto[] {
        if( this.listaAutos.length == 0 ) {
            this.listaAutos = this._determinaListaAutos();
        }
        return this.listaAutos;
    }

    public obtenAuto( id: number ): Auto {
      if( this.listaAutos.length == 0 ) {
        this.listaAutos = this._determinaListaAutos();
      }        
      return this.listaAutos.find( auto => auto.id == id )!;
    }

private _determinaListaAutos(): Auto[] {
    let  listaAutos = [
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
   return listaAutos;
}

}
