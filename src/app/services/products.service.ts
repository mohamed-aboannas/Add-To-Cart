import { NgFor } from '@angular/common';
import { Injectable } from '@angular/core';
import { item } from '../models/item';
import {Subject} from 'rxjs';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  // new array from item model
  items:item[]=[];
  Details:item[]=[]
  

  constructor(private http:HttpClient) { }
  // get api 
  public getProducts() :Observable<item[]>{
    return this.http.get<item[]>("https://fakestoreapi.com/products")
  }



  //get items
  getItems() {
    return this.items;
  }

  getItemDetails(){
    return this.Details;
  }

  //adding new item to cart and check for existing items
  addToCart(item:item){
  // check if items is already in cart
  let alreadyexists:boolean=false;
  let existingitem =undefined  ;

  if(this.items.length>0){
    // find if item is exists in cart for denie duplicate
    existingitem=this.items.find(i=>i.title==item.title);
    alreadyexists=(existingitem !=undefined);
  }

    // here we know that item is in cart
  if(alreadyexists) {
    window.alert("already exists")
  }else{
    // push the new item to cart
     
    this.items.push(item);
    item.quantity=1;
    item.suptot=item.price
    
    window.alert('Your product has been added to the cart!');
    
 }
  }
  
  
  // clear items from cart
  clearCart() {
    // assign cart to an empty array and then return it
    this.items = [];
    return this.items;
  }

  // remove an item from cart list
  removeItem(index: number){
    this.items.splice(index, 1);
}


  itemDetails(item:item):void{
    this.Details.push(item)
  }
}

