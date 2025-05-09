import { CommonModule } from '@angular/common';
import { Icard } from './../../../../interfaces/icard';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-happy-customer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './happy-customer.component.html',
  styleUrl: './happy-customer.component.scss'
})
export class HappyCustomerComponent {
@Input() data!:Icard
}
