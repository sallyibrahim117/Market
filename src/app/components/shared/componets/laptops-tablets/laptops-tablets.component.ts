import { Component, Input } from '@angular/core';
import { Iproduct } from '../../../../interfaces/iproduct';

@Component({
  selector: 'app-laptops-tablets',
  standalone: true,
  imports: [],
  templateUrl: './laptops-tablets.component.html',
  styleUrl: './laptops-tablets.component.scss'
})
export class LaptopsTabletsComponent {
@Input() laptopAndTablets!:Iproduct
}
