import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  get menuToggle(){
    return this.sharedService.menuToggle;
  }

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
  }

  showMenu(){
    this.sharedService.showMenu();
  }

}
