import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  heroe: any = {};

  constructor(private activatedRoute: ActivatedRoute,
              private heroesService: HeroesService) {
    this.activatedRoute.params.subscribe( (parameters) => {
      // console.log(parameters['id']);
      let idx = parameters['id'];
      this.heroe = this.heroesService.getHeroe(idx);
      console.log("heroeIdx: ", this.heroe);
      return this.heroe;
    })
  }

  ngOnInit() {

  }


}
