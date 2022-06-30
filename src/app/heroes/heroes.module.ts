import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './pages/list/list.component';
import { AddComponent } from './pages/add/add.component';
import { EditComponent } from './pages/edit/edit.component';
import { HeroComponent } from './pages/hero/hero.component';
import { HomeComponent } from './pages/home/home.component';
import { HeroesRoutingModule } from './heroes-routing.module';



@NgModule({
  declarations: [
    ListComponent,
    AddComponent,
    EditComponent,
    HeroComponent,
    HomeComponent
  ],
  imports: [
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
