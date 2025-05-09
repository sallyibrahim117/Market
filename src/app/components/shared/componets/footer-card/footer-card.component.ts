import { Component } from '@angular/core';
import { customerService, footerData, quickLinks } from '../../../../data';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../../../../footer/footer.component";

@Component({
  selector: 'app-footer-card',
  standalone: true,
  imports: [CommonModule, FooterComponent],
  templateUrl: './footer-card.component.html',
  styleUrl: './footer-card.component.scss'
})
export class FooterCardComponent {
 footercard=footerData
    footercard1=customerService
    footercard2=quickLinks
}
