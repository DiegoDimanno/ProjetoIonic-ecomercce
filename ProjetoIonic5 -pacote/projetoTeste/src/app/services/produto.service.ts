import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { produto} from '../models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

getProdutosTodos(){
  return this.http.get<produto>('http://ilook-env.eba-y7ikrzce.sa-east-1.elasticbeanstalk.com/api/produtos/todos');

}

getProduto(Pid){
  return this.http.get<produto>('http://ilook-env.eba-y7ikrzce.sa-east-1.elasticbeanstalk.com/api/produtos/'+Pid);
    
}

getProdutosDestaques(){
  return this.http.get<produto>('http://ilook-env.eba-y7ikrzce.sa-east-1.elasticbeanstalk.com/api/produtos/destaques');

}

getProdutosOrganicos(){
  return this.http.get<produto>('http://ilook-env.eba-y7ikrzce.sa-east-1.elasticbeanstalk.com/api/produtos/organicos');

}


}