import { Component, OnInit } from '@angular/core';
import { AnuncioService } from '../anuncio-service/anuncio-service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {


  public anuncios: any[] | undefined;
  constructor(private anuncioService: AnuncioService) {}

  ngOnInit() {
    this.anuncioService.obterTodos().subscribe(data => {
      this.anuncios = data;
      console.log("data")
      console.log(data);
      console.log("Anuncios")
      console.log(this.anuncios)
    });
  }

}
