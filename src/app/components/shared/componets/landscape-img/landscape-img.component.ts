import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Inameoffeature } from '../../../../interfaces/inameoffeature';

@Component({
  selector: 'app-landscape-img',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './landscape-img.component.html',
  styleUrl: './landscape-img.component.scss'
})
export class LandscapeImgComponent {
@Input() title!:Inameoffeature
}
