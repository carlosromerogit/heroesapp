import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  menuToggle: boolean = false;

  constructor() { }

  showMenu(){
    this.menuToggle = !this.menuToggle;
      if(this.menuToggle){
        document.body.style.overflowY = 'hidden';
      }else{
        document.body.style.overflowY = 'auto';
    }
  }
}

