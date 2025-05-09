import { Component, Input } from '@angular/core';
import { Iproduct } from '../../../../interfaces/iproduct';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-music-video',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './music-video.component.html',
  styleUrl: './music-video.component.scss'
})
export class MusicVideoComponent {
@Input() musicAndVideo!:Iproduct
}
