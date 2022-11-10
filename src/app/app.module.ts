//Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//terceros

//Porpias
import { AppComponent } from './app.component';
import {HeroesModules} from "./heroes/heroes.modules";



@NgModule({
  //todas las componentes
  declarations: [
    AppComponent,

  ],
  imports: [
    //Implementar otros modulos
    BrowserModule,
    HeroesModules
  ],
  providers: [],//servicios
  bootstrap: [AppComponent]//componente con que inicializa nuestra app
})
export class AppModule { }
