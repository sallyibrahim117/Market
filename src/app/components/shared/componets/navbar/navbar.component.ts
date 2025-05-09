import { Ipages } from './../../../../interfaces/ipages';
import { AboutComponent } from './../../../about/about.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavMenuComponent } from "../nav-menu/nav-menu.component";
import { DropdownMenuComponent } from "../dropdown-menu/dropdown-menu.component";
import { allPages, page1 } from '../../../../data';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, NavMenuComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

allpages=allPages


}
