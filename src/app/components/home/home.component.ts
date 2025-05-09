import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { SliderComponent } from '../slider/slider.component';
import { ProductCardComponent } from "../shared/componets/product-card/product-card.component";
import { AndroidPhoneComponent } from "../shared/componets/android-phone/android-phone.component";
import { MusicVideoComponent } from "../shared/componets/music-video/music-video.component";
import { LaptopsTabletsComponent } from "../shared/componets/laptops-tablets/laptops-tablets.component";
import {  allHeadPhones, allProducts, computers, customerService, footerData, laptops, phones, quickLinks, released, sellingPro } from '../../data';
import { CarousalComponent } from "../shared/componets/carousal/carousal.component";
import { ReleasesComponent } from "../releases/releases.component";
import { SellingFeatureComponent } from "../selling-feature/selling-feature.component";
import { FooterComponent } from "../../footer/footer.component";
import { FooterCardComponent } from "../shared/componets/footer-card/footer-card.component";
import { ProductsService } from '../../services/products.service';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SliderComponent, CommonModule, ProductCardComponent, AndroidPhoneComponent, MusicVideoComponent,
    LaptopsTabletsComponent, CarousalComponent, ReleasesComponent, SellingFeatureComponent, FooterComponent,
     FooterCardComponent],

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})


export class HomeComponent {
  arrOfImgs=[{im:"/assets/imgs/bg1.jpg",text:"mobile & tablets"},
    {im:"/assets/imgs/bg2.jpg",text:"gadgets & accessories"},
    {im:"/assets/imgs/bg3.jpg",text:"computers & laptop"}
  ]
  constructor(private productService:ProductsService ,private http:HttpClient){}
  products:any[] | undefined
  category:any[]|undefined
  selectedCategory: string='';

  ngOnInit(): void {

    this.getProducts()
    this.getCategories()


  }
  getProducts():void{
this.productService.getAllproducts().subscribe({
  next:(res:any)=>{
    console.log(res)
     this.products=res;
  },
  error:()=>{},
  complete:()=>{}
})
  }

  getCategories():void{
    this.productService.getCategoriesOfProducts().subscribe({
      next:(res:any)=>{
        console.log(res)
         this.category=res;
      },
      error:()=>{},
      complete:()=>{}
    })
      }

      loadProductsByCategory(cat: string) {
        this.selectedCategory = cat;
        this.productService.getProductsByCategory(cat).subscribe( {
          next:(res:any)=>{
            console.log(res)
             this.products=res;

          },
          error:()=>{},
          complete:()=>{}

        });
      }


  // products:any[]=[   {title:"laptop & tablet" ,image:"/assets/imgs/pro1.jpg",
  //   desc:"apple macBook pro with otuch bar mF841DSN/A 13",price: 1.259},
  //   {title:"headphones" ,image:"/assets/imgs/pro2.jpg",
  //   desc:"Ultra Wireless S50 Headphones with Bluetooth",price: 349},
  //   {title:"Phones" ,image:"/assets/imgs/pro3.jpg",
  //     desc:"Apple iPhone 6s -16/32/64/ 128GB Grey",price: 449},
  //     {title:"Gadgets" ,image:"/assets/imgs/pro4.jpg",
  //       desc:"Apple Watch Sport 42mm New",price: 349},

  //       {title:"laptop & tablet" ,image:"/assets/imgs/pro1.jpg",
  //         desc:"MacBook Pro Retina Touch Bar 2.9GHz Intel Core i7 16GB",price: 1.259},
  //         {title:"Laptop & Tablet" ,image:"/assets/imgs/pro5.jpg",
  //           desc:"MacBook Rose Gold 1.2GHz 256GB butterfly mechanism",price: 1.299},
  //           {title:"Phones" ,image:"/assets/imgs/pro8.jpg",
  //             desc:"Apple iPhone 7 4.7-Inch Silver 128GB Contact-Free",price: 250},
  //             {title:"Phones" ,image:"/assets/imgs/pro3.jpg",
  //               desc:"Apple iPhone 6s -16/32/64/ 128GB Grey",price: 351},
  //               {title:"gadgets, headphones" ,image:"/assets/imgs/whitehead.jpg",
  //                 desc:"Apple iPhone 6s -16/32/64/ 128GB Grey",price: 225},
  //                 {title:"android" ,image:"/assets/imgs/and1.jpg",
  //                   desc:"Apple iPhone 6s -16/32/64/ 128GB Grey",price: 449},
  // ];
//   whitehead=this.products[8]
// android=this.products[9];


  cateogries:any[]=[{name:"products",id:1},
    {name:"laptops &tablets",id:2},{name:"computers",id:3},{name:"headphones",id:4},{name:"phones",id:5}
  ]

//   changeCategory(id:number){
// console.log(id);
// if(id == 1){


// this.products= allProducts
// } else if (id == 2) {
//   this.products= laptops;
// }
// else if (id == 3) {
//   this.products= computers;
// }
// else if (id == 4) {
//   this.products= allHeadPhones;
// }
// else if (id == 5) {
//   this.products= phones;
// }

//   }
allPhones:any[]=[{title:"iPhones" ,image:"/assets/imgs/and2.jpg",
  desc:"Apple iPhone 6 4.7-Inch Black 128GB",price: 449},
  {title:"iPhones" ,image:"/assets/imgs/and3.jpg",
    desc:"Apple iPhone 6s -16/32/64/ 128GB Grey",price: 552},
    {title:"android" ,image:"/assets/imgs/and4.jpg",
      desc:"Apple iPhone 6s -16/32/64/ 128GB Grey",price: 1112},
      {title:"iPhones" ,image:"/assets/imgs/and5.jpg",
        desc:"Apple iPhone 6s -16/32/64/ 128GB Grey",price: 259},
]
allmusic=signal<any[]>([{title:"movies, music&Videos" ,image:"/assets/imgs/movi1.jpg",
  desc:"children’s movie part 3, documentary",price: 19},
  {title:"Music&Videos" ,image:"/assets/imgs/movi2.jpg",
    desc:"Action Movie, Sound Mixing",price: 22}
  ,{title:"Music&movies" ,image:"/assets/imgs/movi3.jpg",
    desc:"Futuristic Movie, Visual Effects",price: 20}
    ,{title:"Music&Videos" ,image:"/assets/imgs/movi4.jpg",
      desc:"Animated Movie, Foreign Language",price: 22}
  ]
  )
musicAndVideo=signal<any>({title:" music&Videos" ,image:"/assets/imgs/movi5.jpg",
  desc:"Continuum Season 1, Original Screenplay",price: 16})


  laptopAndTablets=signal<any>({title:" Laptop & Tablet" ,image:"/assets/imgs/1.png",
    desc:"Apple MacBook Air MJVE2 13.3-Inch Laptop 128 GB",price: 1.799})

    release=released
    selling=sellingPro


}
