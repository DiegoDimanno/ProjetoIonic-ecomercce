import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { environment } from '../../environments/environment';
import { usuario } from '../models/usuario.model';
import { AuthService } from '../services/auth.service';
import { ProdutoService } from '../services/produto.service';
import { BehaviorSubject } from 'rxjs';
import { CarrinhoService } from '../services/carrinho.service';
import { CarrinhoPage } from '../carrinho/carrinho.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private selectedSegment: String ='todos'

  
  buscarProduto ='';
  
  usuario:usuario
  message: string; 

  cart = [];
  products:{};
  produto:any;
  cartItemCount: BehaviorSubject<number>;
  
  constructor(
    public alert: AlertController, 
    private servicoProduto:ProdutoService, 
    private auth:AuthService, 
    private http:HttpClient, 
    public cartService: CarrinhoService,
    private modalCtrl: ModalController
  ) {}

   ionViewWillEnter() {
    this.servicoProduto.getProdutosTodos()
      .subscribe(resposta => {
        this.produto = resposta;
        
      })   
    }

    // pegar os produtos do service
      ngOnInit(){
        this.products = this.cartService.getProducts();
        this.cart = this.cartService.getCart();
        this.cartItemCount = this.cartService.getCartItemCount();
    
      }
    
      addToCart(product) {
        this.cartService.addProduct(product);
        
      }
     
      async openCart() {
       
        let modal = await this.modalCtrl.create({
          component: CarrinhoPage,
          cssClass: 'cart-modal'
        });
        modal.onWillDismiss().then(() => {
          
        });
        modal.present();
      }
     
      
    
    
      
      /* this.auth.authUserObservable.subscribe(jwt => {
        if (jwt) {
          const decoded = jwtHelper.decodeToken(jwt);
          this.usuario = decoded.sub;
        } else {
          this.usuario = null;
        }
      });*/
 
  

  /*ngOnInit(): void {
    this.http.get(`${environment.serverURL}/secret`, {responseType: 'text'}).subscribe(
      text => this.message = text,
      err => console.log(err)
    );
  }*/
  
  segmentChanged(event){
    console.log(event.target.value);
    this.selectedSegment=event.target.value; 
    if (event.target.value === "todos") {      
      this.servicoProduto.getProdutosTodos()
      .subscribe(resposta => {
        this.produto = resposta;
      })
    }

    if (event.target.value === "destaques") {
      this.servicoProduto.getProdutosDestaques()
      .subscribe(resposta => {
        this.produto = resposta;
      })
    }

    if (event.target.value === "organicos") {
      this.servicoProduto.getProdutosOrganicos()
      .subscribe(resposta => {
        this.produto = resposta;
      })
    }

  }  

  ionSlideDidChange(event){


  }

}
