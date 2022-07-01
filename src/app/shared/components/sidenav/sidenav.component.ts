import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

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
