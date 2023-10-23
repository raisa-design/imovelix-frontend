import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AnuncioService } from '../anuncio-service/anuncio-service';

@Component({
  selector: 'app-anuncio',
  templateUrl: './anuncio.component.html',
  styleUrls: ['./anuncio.component.css']
})
export class AnuncioComponent implements OnInit {
  data: any;

  constructor(private anuncioService: AnuncioService) {}

  ngOnInit(): void {
    // this.anuncioService.getAnuncio('3fa85f64-5717-4562-b3fc-2c963f66afa6').subscribe((data) => {
    //   console.log(data);
    // });
  }

}
