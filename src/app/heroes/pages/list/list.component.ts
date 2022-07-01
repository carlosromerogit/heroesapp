import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  heroes: Hero[]=[];

  constructor(private heroService:HeroService) { }

  ngOnInit(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes)
  }

}
