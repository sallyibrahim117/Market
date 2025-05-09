import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DropdownMenuComponent } from "../shared/componets/dropdown-menu/dropdown-menu.component";
import { categoryPage, page2 } from '../../data';
import { DropdowmForCategoriesComponent } from "../shared/componets/dropdowm-for-categories/dropdowm-for-categories.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, DropdownMenuComponent, DropdowmForCategoriesComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
links:any[]=[{link:"super deals"},{link:"feautured brands"},{link:"Trending Styles"},{link:"Gift Cards"}];
links2:any[]=[{link:"Store Locator",icon:"pi pi-map-marker"},
  {link:"Track Your Order",icon:"pi pi-gauge"},{link:"My Account",icon:"pi pi-user"}];

  pageofCat=categoryPage
}

