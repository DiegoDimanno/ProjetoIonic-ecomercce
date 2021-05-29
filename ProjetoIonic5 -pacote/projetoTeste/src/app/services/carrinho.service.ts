  
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/cart.model';
import { produto } from '../models/produto.model';

/*
  Generated class for the CartProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  
  data: produto[] = [
    { idProducts: 1,
      nameProducts: 'Call Of Duty - 2019',
      pSaleProducts: 4000,
      qtdProducts: 1
    },
    { idProducts: 2,
      nameProducts: 'Spiderman - 2019',
      pSaleProducts: 3000,
      qtdProducts: 1
    },
    { idProducts: 3,
      nameProducts: 'Mortal Kombat 11 - 2019',
      pSaleProducts: 4000,
      qtdProducts: 1
    }
  ]



  private cart = []
  private cartItemCount = new BehaviorSubject(0);
  
  
  constructor() { }

  getProducts(){
    return this.data;
  }

  getCart(){
    return this.cart;
  }

  getCartItemCount(): BehaviorSubject<number> {
		return this.cartItemCount;
	}

  addProduct(product) {
    let added = false;
    for (let p of this.cart) {
      if (p.idProducts === product.idProducts) {
        p.qtdProducts += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      product.qtdProducts = 1;
      this.cart.push(product);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }
 
  decreaseProduct(product) {
    for (const [index, item] of this.cart.entries()) {
			if (item.idProducts === product.id) {
				item.qtdProducts -= 1;
				if (item.qtdProducts === 0) {
					this.cart.splice(index, 1);
				}
			}
		}
		this.cartItemCount.next(this.cartItemCount.value - 1);
  }
 
  removeProduct(product) {
    for (const [index, item] of this.cart.entries()) {
			if (item.id === product.id) {
				this.cartItemCount.next(this.cartItemCount.value - item.qty);
				this.cart.splice(index, 1);
			}
		}
  }
}