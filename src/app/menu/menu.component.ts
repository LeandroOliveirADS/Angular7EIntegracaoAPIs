import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  private items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Inicial',
        items: [
          { label: 'Home', icon: 'fa fa-plus', routerLink: 'home' }
        ]
      },
      {
        label: 'Usuário',
        items: [
          {label: 'Usuário', icon: 'fa fa-repeat', routerLink: 'usuario'}
        ]
      }
    ]


  }
}
