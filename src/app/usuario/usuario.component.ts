import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  public usuario:Usuario
  constructor(private usuarioService:UsuarioService) { }

  ngOnInit() {
    this.usuario = this.usuarioService.getUsuario()
  }

}
