import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { produto } from '../models/produto.model';

import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
})
export class DetalhesPage implements OnInit {

  public produtoRecebido = {};

  constructor(private servicoProduto: ProdutoService, public rotaDetalhes: ActivatedRoute) {

    this.rotaDetalhes.paramMap.subscribe(
      (parametroDaDetalhe: ParamMap) => {
        this.servicoProduto.getProduto(parametroDaDetalhe.get('id')).subscribe
          ((resposta: produto) => {
            this.produtoRecebido = resposta;
          })

      })
  }

  ngOnInit() {
  }

}
