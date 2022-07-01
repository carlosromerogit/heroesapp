import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {

  // @ViewChild('paraph') paraph!: ElementRef<HTMLParagraphElement>
  @ViewChildren('paraph') paraph!:QueryList<ElementRef<HTMLParagraphElement>>

  names: string[] = ['Carlos','Mariana', 'Alexa']
  
  constructor() { }
  ngAfterViewInit(): void {
    this.paraph.forEach(e => e.nativeElement.addEventListener('click',(event)=>{
        console.log(event.target)
    }))
  }
  
  ngOnInit(): void {
    
  }
  
  efect(){
  }

}
