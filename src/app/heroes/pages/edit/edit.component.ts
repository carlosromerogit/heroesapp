import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HeroService } from '../../services/hero.service';
import { Hero } from '../../interfaces/hero.interface';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  hero!: Hero;

  form: FormGroup = this.formBuilder.group({
    superhero: ['', [Validators.required, Validators.minLength(6)]],
    alter_ego: ['', [Validators.required]],
    first_appearance: ['', [Validators.required]],
    characters: ['', [Validators.required]],
    alt_img: ['', [Validators.required]],
    publisher: ['', [Validators.required]],
    id: ['']
  })
  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    }
  ];
  get id() {
    return this.hero.id
  }

  constructor(private activatedRoute: ActivatedRoute,
              private formBuilder: FormBuilder,
              private heroService: HeroService,
              private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.heroService.getHeroById(id)))
      .subscribe((hero) => {
        this.hero = hero;
        this.form.get('superhero')?.setValue(this.hero.superhero)
        this.form.get('alter_ego')?.setValue(this.hero.alter_ego)
        this.form.get('first_appearance')?.setValue(this.hero.first_appearance)
        this.form.get('characters')?.setValue(this.hero.characters)
        this.form.get('publisher')?.setValue(this.hero.publisher)
        this.form.get('alt_img')?.setValue(this.hero.alt_img || this.hero.id)
        this.form.get('id')?.setValue(this.hero.id)
      })
  }

  ifError(control: string) {
    return this.form.get(control)?.invalid && this.form.get(control)?.touched;
  }
  errorMessage(control: string) {
    const error = this.form.get(control)?.errors
    if (error!['required']) {
      return 'Campo requerido'
    } else if (error!['minlength']) {
      return 'Debe tener mínimo 6 caracteres'
    }
    return '';
  }

  updateHero() {
    this.form.markAllAsTouched();
    const hero = this.form.value;
    this.heroService.updateHero(hero.id, hero)
      .subscribe(() => { this.router.navigate(['/heroes/list']) })
  }
  deletehero(id: string) {
    this.heroService.deleteHero(id)
      .subscribe(() => this.router.navigate(['/heroes/list']))
  }

}
