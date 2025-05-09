import { Component, Input } from '@angular/core';
import { Irelease } from '../../interfaces/irelease';
import { ReleasesComponent } from "../releases/releases.component";
import { released } from '../../data';

@Component({
  selector: 'app-selling-feature',
  standalone: true,
  imports: [ReleasesComponent],
  templateUrl: './selling-feature.component.html',
  styleUrl: './selling-feature.component.scss'
})
export class SellingFeatureComponent {
@Input()sellingFeatur!:Irelease

}
