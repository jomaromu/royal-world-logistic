import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './es/inicio/inicio.component';
import { HomeComponent } from './en/home/home.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: InicioComponent },
  { path: '**', component: InicioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
