import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  heroesSuggested: Hero[]=[];

  hero:Hero[]=[];

  query: string = '';

  @ViewChild('search') search!: ElementRef<HTMLInputElement>;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
  }

  typeQuery(){
      this.query = this.search.nativeElement.value;
      this.query = this.query.trim().toLowerCase();
      if(this.query.length === 0){return}
      this.heroService.getHeroByQuery(this.query)
      .subscribe(heroes => {
        this.heroesSuggested = heroes;
        this.heroesSuggested = this.heroesSuggested.slice(0, 6);
      })
    }
    selectHeroSuggested(hero:string){
      this.heroService.getHeroByQuery(hero)
          .subscribe(hero => {
            this.hero = hero;
            this.hero = this.hero.slice(0,1);
            this.query = '';
            this.search.nativeElement.value = '';
          })
    }
}

