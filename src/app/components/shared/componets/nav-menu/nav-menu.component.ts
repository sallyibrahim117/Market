import { Component, Input } from '@angular/core';
import { Ipages } from '../../../../interfaces/ipages';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DropdownMenuComponent } from "../dropdown-menu/dropdown-menu.component";
import { page1 } from '../../../../data';

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [CommonModule, RouterModule, DropdownMenuComponent],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.scss'
})
export class NavMenuComponent {
@Input() navItem!:Ipages
pages=page1

}
