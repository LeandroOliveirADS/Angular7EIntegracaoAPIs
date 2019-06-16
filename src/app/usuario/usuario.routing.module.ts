import { NgModule } from '@angular/core';
import{Routes, RouterModule} from '@angular/router'
import { UsuarioComponent } from './usuario.component';

const routes: Routes = [
  { path: '', 
    component:UsuarioComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class UsuarioRoutingModule { }
