import { Component, OnInit } from '@angular/core';
import { Product } from '../models/cart.model';
import { CarrinhoService } from '../services/carrinho.service';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { produto } from '../models/produto.model';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
})
export class CarrinhoPage implements OnInit {

  cart: produto[] = [];
 
  constructor(private cartService: CarrinhoService, 
              private modalCtrl: ModalController, 
              
              private router: Router) { }
 
  ngOnInit() {
    this.cart = this.cartService.getCart();
  }
 
  decreaseCartItem(product) {
    this.cartService.decreaseProduct(product);
  }
 
  increaseCartItem(product) {
    this.cartService.addProduct(product);
  }
 
  removeCartItem(product) {
    this.cartService.removeProduct(product);
  }
 
  getTotal() {
    return this.cart.reduce((i, j) => i + j.pSaleProducts * j.qtdProducts, 0);
  }
 
  close() {
    this.modalCtrl.dismiss();
  }

  carddetails() {
    this.close();
    this.router.navigate(['/pagamento']);
  }
 
}
