import { IonicModule } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-publicacion',

    
        
          
    

        
    
    @@ -9,16 +10,28 @@ import { ActivatedRoute } from '@angular/router';
  
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.scss'],
})
export class PublicacionComponent implements OnInit {

  idPublicacion: number;

  publicacion: any;

  usuario: any;

  constructor(private RutaActiva: ActivatedRoute) { }



  ngOnInit() {

    this.idPublicacion = this.RutaActiva.snapshot.params.publicacionId;
    //console.log(this.RutaActiva.snapshot.params)

    this.RutaActiva.queryParams.subscribe(params => {
      //this.usuario = params['name'];
      console.log(params.publicacionId);
    })
    //console.log(this.RutaActiva.snapshot.params);

    //this.idPublicacion = this.RutaActiva.snapshot.params.id;
    console.log(this.idPublicacion);
  }

}