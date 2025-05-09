import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Ipages } from '../../../../interfaces/ipages';

@Component({
  selector: 'app-dropdowm-for-categories',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './dropdowm-for-categories.component.html',
  styleUrl: './dropdowm-for-categories.component.scss'
})
export class DropdowmForCategoriesComponent {
@Input() page!:Ipages

}
