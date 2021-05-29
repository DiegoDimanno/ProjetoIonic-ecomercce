import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { usuario } from '../models/usuario.model';


@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  constructor(private http: HttpClient) { }

  cadastrarUsuario(cadUsuario: usuario) {
    return this.http.post('http://ilook-env.eba-y7ikrzce.sa-east-1.elasticbeanstalk.com/api/usuarios/cadastrar', cadUsuario);
  }





}

