import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { delay, switchMap, tap } from 'rxjs';
import { HeroService } from '../../services/hero.service';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  hero!: Hero;

  constructor(private activatedRoute: ActivatedRoute,
              private heroService: HeroService) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({id})=> this.heroService.getHeroById(id)),
        // delay(500),
        )
      .subscribe(hero=> this.hero = hero)
  }
}
