import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Heroe } from '../../services/heroes.service'

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent implements OnInit {


  @Input() heroe:Heroe;

  constructor() { }

  ngOnInit() {
  }

}
