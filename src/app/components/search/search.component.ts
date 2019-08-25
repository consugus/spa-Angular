import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from "../../services/heroes.service";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  heroes: Heroe[] = [];
  str:string = "";

  constructor(   private activatedRoute: ActivatedRoute,
                 private heroesService: HeroesService) {
	}

  ngOnInit(  ) {
    // console.log("Hola que tal", NavbarComponent);
    this.activatedRoute.params.subscribe( (parameters) => {
      this.str = parameters["str"];
      this.heroes = this.heroesService.buscarHeroes(this.str);
    });
  }

}
