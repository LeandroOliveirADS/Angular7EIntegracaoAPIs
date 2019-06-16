import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {  

  texto:string;

  constructor() { }

  ngOnInit() {    
    this.texto = "Olá tudo bem?"
  }

  clicou(){
    this.texto = "Clicou"
  }
}
