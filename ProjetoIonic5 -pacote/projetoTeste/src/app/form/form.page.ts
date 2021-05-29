import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { UsuarioService } from '../services/usuario.service';
import { usuario } from '../models/usuario.model';


@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  public cadastro = {userName:''};
  
  public cadastrar:usuario;
  userForm:FormGroup;
  
  // public cadastro = {nameUsers: ''};

  constructor(public rout:ActivatedRoute, public nav: NavController, private Fb: FormBuilder, private usuario: UsuarioService) {
      /*this.rout.paramMap.subscribe((rout:ParamMap)=>{
        console.log(rout.get('id'))

      })*/

      /*this.userForm = this.Fb.group({
        userName: this.cadastro.userName
      })*/

      
   }
   ngOnInit(): void {
    this.userForm = new FormGroup({
      'nameUsers': new FormControl,
      'phoneUsers': new FormControl,
      'celphoneUsers': new FormControl,
      'username': new FormControl,
      'category': new FormControl,
      'password': new FormControl,
      'cpfUsers': new FormControl,
      'rgUsers': new FormControl,
      'nascUsers': new FormControl,      
    });
  }

   cadastrarUsuario() {
    this.cadastrar = {
      idUsers:'',
      username:'',
      nameUsers: this.userForm.value.nameUsers,            
      password: this.userForm.value.password,      
      nascUsers: this.userForm.value.nascUsers,
      rgUsers: this.userForm.value.rgUsers,
      cpfUsers: this.userForm.value.cpfUsers,
      imgUsers: "",
      phoneUsers: this.userForm.value.phoneUsers,
      celphoneUsers: this.userForm.value.celphoneUsers,  
      activeUsers: true, 
      endsUsers:this.userForm.value.endsUsers
    };
    console.log("formCadastrar ", this.cadastrar)
     this.usuario.cadastrarUsuario(this.cadastrar).subscribe(result => { 
       console.log("return: ", result)
     });
    

    /*this.MsgAlert();
    this.userForm.reset();
    this.nav.navigateBack('');*/
   }


  
}
