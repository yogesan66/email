import { Component, OnInit, VERSION } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements OnInit{
  constructor(
    private router:Router
  ){}
ngOnInit(): void {
  // this.router.navigate(['mail'])
}

}
