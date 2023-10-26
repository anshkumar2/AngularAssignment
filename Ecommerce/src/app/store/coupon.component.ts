import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Discount } from '../model/coupon.model';

@Component({
  selector: 'coupon',
  templateUrl: 'coupon.component.html'
})

export class CouponComponent  {
cart: any;
  constructor(private router:Router, public discount: Discount){}
  navigateToStore(){
    this.router.navigate(['/store']);
}


  applyCoupon(){
    this.discount.CheckDiscount();
  }
}
