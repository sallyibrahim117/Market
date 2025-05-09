import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Ipages } from '../../../../interfaces/ipages';

@Component({
  selector: 'app-dropdown-menu',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './dropdown-menu.component.html',
  styleUrl: './dropdown-menu.component.scss'
})
export class DropdownMenuComponent {
@Input() page!:Ipages

}
