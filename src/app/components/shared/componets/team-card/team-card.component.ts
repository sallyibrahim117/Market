import { Component, Input } from '@angular/core';
import { Icard } from '../../../../interfaces/icard';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-team-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team-card.component.html',
  styleUrl: './team-card.component.scss'
})
export class TeamCardComponent {
@Input() card!:Icard
}
