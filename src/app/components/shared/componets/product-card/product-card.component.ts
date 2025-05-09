import { Component, Input } from '@angular/core';
import { Iproduct } from '../../../../interfaces/iproduct';
import { CommonModule } from '@angular/common';
import { RatingModule } from 'primeng/rating';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule,RatingModule,ReactiveFormsModule,FormsModule,RouterModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
@Input() product !:Iproduct
rateValue: number = 0;
// formGroup!: FormGroup;

//     ngOnInit() {
//         this.formGroup = new FormGroup({
//             value: new FormControl(4)
//         });
//       }
}
