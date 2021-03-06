import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { AddComponent } from './pages/add/add.component';
import { EditComponent } from './pages/edit/edit.component';
import { HeroComponent } from './pages/hero/hero.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes =[
  {
    path:'',
    component:HomeComponent,
    children:[
      {
        path:'add',
        component:AddComponent
      },
      {
        path:'edit/:id',
        component:EditComponent
      },
      {
        path:'hero/:id',
        component:HeroComponent
      },
      {
        path:'list',
        component:ListComponent
      },
      {
        path:'search',
        component: SearchComponent
      },
      {
        path:'**',
        redirectTo:'list'
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class HeroesRoutingModule { }
