import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit {

  public slides: any[];


  constructor() {
    this.slides = [];
  }

  ngOnInit(): void {
    this.cargarSlide();
  }

  cargarSlide(): void {
    const objSlide = [
      {
        img: '../../../assets/transporte.png',
        txt: 'Transporte: aereo, maritimo, terrestre',
        active: 'active',
        desc: 'Garantizamos la entrega de mercancías de forma segura, puntual y económica',
      },
      {
        img: '../../../assets/consolidado.png',
        txt: 'Consolidados',
        active: '',
        desc: ' Una empresa puede obtener una reducción de costes en el transporte de sus mercancías. ',
      },
      {
        img: '../../../assets/almacenaje.png',
        txt: 'Almacenaje y distribución',
        active: '',
        desc: 'Manejamos mercancías, manteniéndolos bajo control en un determinado espacio para evitar su deterioro.',
      },
      {
        img: '../../../assets/insurance.png',
        txt: 'Tramites aduanales',
        active: '',
        desc: ' Certificados, solicitudes y documentos administrativos  ',
      },
      {
        img: '../../../assets/seguro.png',
        txt: 'Seguros',
        active: '',
        desc: 'Los seguros para exportaciones e importaciones permiten cubrir los daños en caso de accidente, pérdida o retrasos.',
      },
    ];

    this.slides.push(...objSlide);
  }

}
