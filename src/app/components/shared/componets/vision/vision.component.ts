import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-vision',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vision.component.html',
  styleUrl: './vision.component.scss'
})
export class VisionComponent {

  array=signal<any[]>([
    {img:"assets/imgs/about2.jpg",text:" our vision",desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore magna aliqua consectetur adipisicing."},
    {img:"assets/imgs/about3.jpg",text:" what we do",desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore magna aliqua consectetur adipisicing."},
    {img:"assets/imgs/about4.jpg",text:" company history",desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore magna aliqua consectetur adipisicing."},

  ])

}
