import { Component, OnInit } from '@angular/core';
import { Culture } from '../cultura';
import { CulturaService } from '../cultura.service';


@Component({
  selector: 'app-cultura-gastronomica',
  templateUrl: './cultura-gastronomica.component.html',
  styleUrls: ['./cultura-gastronomica.component.css']
})
export class CulturaGastronomicaComponent implements OnInit{

  cultures: Culture [];
  


  constructor(private culturaService: CulturaService) { 
  this.cultures= [];
  }

  ngOnInit(): void {
    this.cultures = this.culturaService.getCultures();

}
}