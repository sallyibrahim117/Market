import { Irelease } from './../../interfaces/irelease';
import { Component, Input } from '@angular/core';

import { Iproduct } from '../../interfaces/iproduct';
import { Inameoffeature } from '../../interfaces/inameoffeature';

@Component({
  selector: 'app-releases',
  standalone: true,
  imports: [],
  templateUrl: './releases.component.html',
  styleUrl: './releases.component.scss'
})
export class ReleasesComponent {
@Input() data!:Inameoffeature
}
