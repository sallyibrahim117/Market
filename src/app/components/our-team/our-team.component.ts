import { Component, signal } from '@angular/core';
import { LandscapeImgComponent } from "../shared/componets/landscape-img/landscape-img.component";
import { TeamCardComponent } from "../shared/componets/team-card/team-card.component";
import { FooterCardComponent } from "../shared/componets/footer-card/footer-card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-our-team',
  standalone: true,
  imports: [LandscapeImgComponent, TeamCardComponent, FooterCardComponent,CommonModule],
  templateUrl: './our-team.component.html',
  styleUrl: './our-team.component.scss'
})
export class OurTeamComponent {
  myTitle:any={title:"our team"}
  ourTeam=signal<any[]>([{image:"/assets/imgs/t1.jpg",name:"harry potter",desc:"actore cima"},
    {image:"/assets/imgs/t2.jpg",name:"Preston Stephens",desc:"General Manager"},
    {image:"/assets/imgs/t3.jpg",name:"Naomi Robertson",desc:"aAssistant Manager"},
    {image:"/assets/imgs/t4.jpg",name:"Henry Walton",desc:"Image Editor"},
    {image:"/assets/imgs/t5.jpg",name:"Henry Walton",desc:"Image Editor"},
    {image:"/assets/imgs/t6.jpg",name:"harry potter",desc:"actore cima"},
    {image:"/assets/imgs/t7.jpg",name:"duck lone ",desc:"team leader"},
    {image:"/assets/imgs/t8.jpg",name:"harry potter",desc:"actore cima"}
  ])
}
