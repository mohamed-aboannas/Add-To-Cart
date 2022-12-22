export class item{
    id:number;
    title:string;
    price:number;
    image:string;
    quantity:number;
    description:string;
    suptot:number

    constructor(){
        this.id=0,
        this.title='',
        this.price=1000,
        this.image='',
        this.quantity=1,
        this.description="",
        this.suptot=this.quantity*this.price
    }

}