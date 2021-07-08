import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

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
        txt: 'Transport: By air, by sea, or by land',
        active: 'active',
        desc: 'We guarantee the delivery of merchandise in a safe, punctual and economic way.',
      },
      {
        img: '../../../assets/consolidado.png',
        txt: 'Consolidated',
        active: '',
        desc: 'A company can obtain a reduction on its costs in the transport of its merchandises.',
      },
      {
        img: '../../../assets/almacenaje.png',
        txt: 'Storage and distribution',
        active: '',
        desc: 'We handle merchandise keeping them under control in a certain space to avoid deterioration.',
      },
      {
        img: '../../../assets/insurance.png',
        txt: 'Customs procedures',
        active: '',
        desc: 'certificates, applications and administrative documents.',
      },
      {
        img: '../../../assets/seguro.png',
        txt: 'Insurances',
        active: '',
        desc: 'Export and import insurance covers damage in the event of an accident, loss or delay.',
      },
    ];

    this.slides.push(...objSlide);
  }

}
