import { Injectable } from '@angular/core';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  public getUsuario(): Usuario{
    let usuario = new Usuario()
    usuario.nome = "Leandro"
    usuario.email = "leandro@gmail.com"

    return usuario
  }

  public listaUsuarios(): Usuario[]{
    return [
      {
        nome: "Leandro",
        email: "leandro@gmail.com"
      },
      {
        nome: "Maria",
        email: "maria@gmail.com"
      },
      {
        nome: "Laura",
        email: "laura@gmail.com"
      },
      {
        nome: "Jéssica",
        email: "jessica@gmail.com"
      }
    ]
  }
}
