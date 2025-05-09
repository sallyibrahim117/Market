import { Component, Input } from '@angular/core';
import { Iproduct } from '../../../../interfaces/iproduct';

@Component({
  selector: 'app-android-phone',
  standalone: true,
  imports: [],
  templateUrl: './android-phone.component.html',
  styleUrl: './android-phone.component.scss'
})
export class AndroidPhoneComponent {
@Input() androidPhone!:Iproduct;
}
