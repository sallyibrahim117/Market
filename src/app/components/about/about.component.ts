import { Component, signal } from '@angular/core';
import { NavbarComponent } from "../shared/componets/navbar/navbar.component";
import { RouterModule } from '@angular/router';
import { LandscapeImgComponent } from "../shared/componets/landscape-img/landscape-img.component";
import { VisionComponent } from "../shared/componets/vision/vision.component";
import { HappyCustomerComponent } from "../shared/componets/happy-customer/happy-customer.component";
import { FooterCardComponent } from "../shared/componets/footer-card/footer-card.component";
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NavbarComponent, RouterModule, LandscapeImgComponent, VisionComponent, HappyCustomerComponent,
     FooterCardComponent,CommonModule,CarouselModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  responsiveOptions: any[] | undefined;
  myTitle:any={title:"about us"}
customer=signal<any[]>([{image:"/assets/imgs/customer1.png" ,name:"jack gilbert" ,desc:"store manger"},
  {image:"/assets/imgs/customer2.png" ,name:"william gilbert" ,desc:"office manger"},
  {image:"/assets/imgs/customer3.png" ,name:"mina gilbert" ,desc:"backend manger"}
])
// customer2=signal<any>([{image:"/assets/imgs/customer2.png" ,name:"william gilbert" ,desc:"office manger"}])
// customer3=signal<any>([{image:"/assets/imgs/customer3.png" ,name:"mina gilbert" ,desc:"backend manger"}])
}
