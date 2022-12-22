import { Component, OnInit} from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { item } from 'src/app/models/item'; 
import{Router} from'@angular/router'
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 // define some variables
  cartItems:item[]=[];
  display = false;
  cart=true;
  submit=false;
  totalQuantity:number=0;
  totalAmount:number=0;
  FullName:string="";
  Address:string="";
  CreditCard:string="";
 

  constructor(private productservice:ProductsService,private Router:Router){
    
    document.title='cart'; // make atitle to pass to alink in header to open cart page
  }
  
  ngOnInit(): void {
     
    this.cartItems =this.productservice.getItems();
    this.totalAmount=this.getTotalAmount();
    this.totalQuantity=this.getTotalQuantity();
    
    
  }
   

  // remove an item from cart list
  removeItem(index: number) {
    this.productservice.removeItem(index);
}
  // called when user want to buy his cart products
  billInfo():void{
    this.display=true;
  }
  // method to get total cart amount for all cart items
  getTotalAmount(): number {
    let value = 0;
    this.cartItems?.forEach((_e: item) => {
        value += (_e.quantity * _e.price);
      });
    return value;
  }
   
  // method to increase item quantity
  incItemquantity(item:item){

    item.quantity+=1;
    item.suptot=item.quantity*item.price;
    // update total amount with the new item
    this.totalAmount+=item.price;
    this.totalQuantity+=1
      
  }
  // to decrease item quantity
  decItemquantity(item:item){
    if(item.quantity>1){
      item.quantity-=1;
    item.suptot=item.quantity*item.price;
    // update total amount with the new item
    this.totalAmount-=item.price;
    this.totalQuantity-=1
    }

  }
  // method to get total cart quantity for all cart items
  getTotalQuantity(): number {
    let quty = 0;
    this.cartItems?.forEach((_e: item) => {
        quty += (_e.quantity);
      });
    return quty;
  }

  onSubmitCart():void{
    
      this.cart=false;
      this.display=false;
      this.submit=true;
      this.productservice.clearCart();
    
    
  }

  // navigate to products componant
  goToProducts($myParam: string = ''): void {
    const navigationDetails: string[] = [''];
    if($myParam.length) {
      navigationDetails.push($myParam);
    }
    this.Router.navigate(navigationDetails);
  }

  submitForm():void{

  }
  
}

