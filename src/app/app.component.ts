import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/shared/componets/navbar/navbar.component";
import { HeaderComponent } from "./components/header/header.component";
import { LoginComponent } from "./components/login/login.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HeaderComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'store';
  showNav:boolean=false;
  constructor(private router:Router){

  }
  ngDoCheck(): void {
   console.log(this.router.url);

if (this.router.url.includes("login")){
  this.showNav=false;
}else{
  this.showNav=true
}
  }
}
