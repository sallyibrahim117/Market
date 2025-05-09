import { ProductsService } from './../../services/products.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  constructor(private activatedRoute: ActivatedRoute,private productsService:ProductsService){}
  proid!: number;
  proDetails:any;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.activatedRoute);
    this.proid= +this.activatedRoute.snapshot.params['id']
    console.log(this.proid);
    this.getproductdetail();
  }
  getproductdetail(){
    this.productsService.getproductById(this.proid).subscribe({
      next:(res:any)=>{this.proDetails=res},
      error:()=>{},
      complete:()=>{}
    })
  }
}
