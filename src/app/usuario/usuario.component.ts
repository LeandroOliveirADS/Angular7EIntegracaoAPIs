import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario';
import {ConfirmationService} from 'primeng/api';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
  providers: [ConfirmationService]
})
export class UsuarioComponent implements OnInit {
  
  public usuarios:Usuario[]

  constructor(private usuarioService:UsuarioService, private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.listaUsuario();
  }

  public listaUsuario(){
    this.usuarioService.listaUsuarios().subscribe(
      response => {
        this.usuarios = response
      }, error => {
        alert("Erro!")
      }
    )
  }

  public deletar(id: string){
    this.confirmationService.confirm({
      message: 'Você tem certeza?',
      accept: () => {
        this.usuarioService.deletar(id).subscribe(
          r => {
            this.listaUsuario();
          }
        )
      }
    });
  }
}
