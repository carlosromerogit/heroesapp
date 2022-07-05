import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HeroService } from '../../services/hero.service';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  form: FormGroup = this.formBuilder.group({
    superhero: ['', [Validators.required, Validators.minLength(6)]],
    alter_ego:['', [Validators.required]],
    first_appearance:['', [Validators.required]],
    characters:['',[Validators.required]],
    alt_img:['', [Validators.required]],
    publisher:['',[Validators.required]]
  })


  get url(){
    return this.form.get('alt_img')?.value;
  }

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

  constructor(private formBuilder:FormBuilder,
              private heroService: HeroService) { }

  ngOnInit(): void {
  }
  errorMessage(control:string){
    const error = this.form.get(control)?.errors
   if(error!['required']){
     return 'Campo requerido'
   }else if(error!['minlength']){
     return 'Debe tener mínimo 6 caracteres'
   }
   return '';
 }

  ifError(control:string){
    return this.form.get(control)?.invalid && this.form.get(control)?.touched;
  }

  addHero(){
    this.form.markAllAsTouched();
    const hero = this.form.value;
    this.heroService.createHero(hero)
        .subscribe(console.log)
  }

}
