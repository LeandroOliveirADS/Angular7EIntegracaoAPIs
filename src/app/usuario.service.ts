import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = 'http://localhost:8080/usuario'

  constructor(private http:HttpClient) { }

  public getUsuario(): Usuario{
    let usuario = new Usuario()
    usuario.nome = "Leandro"
    usuario.email = "leandro@gmail.com"

    return usuario
  }

  public salvar(usuario: Usuario):Observable<Usuario>{
    return this.http.post<Usuario>(this.url, usuario);
  }

  public listaUsuarios(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.url)
  }

public deletar(id: string): Observable<any>{
  return this.http.delete(this.url + "/" + id)
}
}
