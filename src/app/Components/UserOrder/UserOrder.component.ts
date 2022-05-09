import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { OrderService } from 'src/app/Services/Order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-UserOrder',
  templateUrl: './UserOrder.component.html',
  styleUrls: ['./UserOrder.component.css']
})
export class UserOrderComponent implements OnInit {
  constructor( private orderService :OrderService ,private router:Router) { }
  userOrders:any;
  selectedOrderID:any;
  ngOnInit() {
   this.orderService.GetOrdersByUserId("ca425ef0-c490-48f5-8eb6-e468f85f1890").subscribe(
     (data)=>{console.log(data)
               this.userOrders=data ;},
     (err)=>{console.log(err)}
   );
  }
  openOrderDetails(prdId:number){
    //No that is wrong: This id is brought by url this.prdListCat = this.staticPrdService.getProductByCatID(2);
    this.router.navigate(['/OrderDetails/',prdId])
  }
}