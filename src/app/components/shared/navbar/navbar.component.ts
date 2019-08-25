import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HeroesService } from '../../../services/heroes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(  private router:Router) { }

  ngOnInit() {
  }

  buscarHeroe( str: string ){
    this.router.navigate(['/search', str]);
  }

}; // End class NavbarComponent
