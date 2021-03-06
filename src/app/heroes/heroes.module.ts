import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListComponent } from './pages/list/list.component';
import { AddComponent } from './pages/add/add.component';
import { EditComponent } from './pages/edit/edit.component';
import { HeroComponent } from './pages/hero/hero.component';
import { HomeComponent } from './pages/home/home.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { SearchComponent } from './pages/search/search.component';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { ImagePipe } from './pipes/image.pipe';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListComponent,
    AddComponent,
    EditComponent,
    HeroComponent,
    HomeComponent,
    SearchComponent,
    HeroCardComponent,
    ImagePipe
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    ReactiveFormsModule
  ]
})
export class HeroesModule { }
