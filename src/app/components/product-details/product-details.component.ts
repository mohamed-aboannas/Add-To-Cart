import { Component, OnInit } from '@angular/core';
import { item } from 'src/app/models/item';
import { ProductsService } from 'src/app/services/products.service';
import{Router} from'@angular/router'
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  item:item[]=[]
  constructor(private productservice:ProductsService,private Router:Router){
    /* this.item={
      id:0,
      title:'',
      price:1000,
      image:'',
      quantity:1,
      description:"",
      suptot:0
    } */
  }

  ngOnInit(): void {

    this.item=this.productservice.getItemDetails()
    
  }

  addToCart( item:item): void {
   
    this.productservice.addToCart(item); 
  }

}
