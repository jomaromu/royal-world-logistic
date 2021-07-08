import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewChecked {

  @ViewChild('video', { static: true }) video: ElementRef<HTMLVideoElement>;
  // public video: string;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.cerrarResponsivo();
  }

  ngAfterViewChecked(): void {
    this.videBanner();
  }

  cerrarResponsivo(): void {
    const cerrarRes = document.getElementById('cerrarRes');
    const menuResponsivo = document.getElementById('menu-responsivo');
    const barra = document.getElementById('barra');

    cerrarRes.addEventListener('click', () => {
      menuResponsivo.classList.remove('animate__slideInLeft');

      menuResponsivo.classList.add('animate__slideOutLeft');
      // menuResponsivo.style.display = 'none';
      // console.log(menuResponsivo);
    });

    barra.addEventListener('click', () => {
      menuResponsivo.style.display = 'flex';
      menuResponsivo.classList.remove('animate__slideOutLeft');
      menuResponsivo.classList.add('animate__slideInLeft');
    });

    const li = document.getElementsByClassName('res');
    const arrayli = Array.from(li);

    arrayli.forEach((element) => {
      element.addEventListener('click', () => {
        menuResponsivo.style.display = 'none';

      });
    });
  }

  videBanner(): void {

    const video = this.video.nativeElement;
    window.dispatchEvent(new Event('click'));

    setTimeout(() => {
      video.muted = true;
      video.play();
    }, 1000);
  }


  selectIdioma(e): any {
    console.log(e.target.value);
    const valor = e.target.value;

    switch (valor) {

      case 'es':
        this.router.navigate(['/inicio']);
        break;

      case 'en':
        this.router.navigate(['/home']);
        break;

      default: this.router.navigate(['home']);
    }
  }
}
