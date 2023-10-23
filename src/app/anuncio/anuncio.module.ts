import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './listar/listar.component';
import { AnuncioService } from './anuncio-service/anuncio-service';

@NgModule({
  declarations: [
   
    ListarComponent,
    
  ],
  imports: [
    CommonModule,
  ],
  providers: [
    AnuncioService
  ]
})
export class AnuncioModule { }
