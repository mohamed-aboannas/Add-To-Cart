import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { item } from 'src/app/models/item'; 
import { ProductsService } from 'src/app/services/products.service';
import { Observable } from 'rxjs';
import{Router} from'@angular/router'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',

  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  items:item[]=[];

  
  constructor(private productsService :ProductsService,private Router:Router){}
  
  ngOnInit(): void {
    // get products from api
     this.productsService.getProducts().subscribe(res=>{
      this.items=res
     });
  }

  addToCart( item:item): void {
   
    this.productsService.addToCart(item); 
  }
  
 viewDetails(item:item):void{
  this.productsService.itemDetails(item);
  this.goToDetails()
 }


 goToDetails($myParam: string = ''): void {
  const navigationDetails: string[] = ['/Details'];
  if($myParam.length) {
    navigationDetails.push($myParam);
  }
  this.Router.navigate(navigationDetails);
}
}
