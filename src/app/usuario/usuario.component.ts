import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  
  public usuarios:Usuario[]

  constructor(private usuarioService:UsuarioService) { }

  ngOnInit() {
    this.usuarios = this.usuarioService.listaUsuarios()
  }

}
