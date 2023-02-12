import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EditorsComponent} from '../pages/editors/editors.component';
import {ConnexionComponent} from './connexion/connexion.component';

const routes: Routes =  [{
  path: '',
  children: [{
    path: 'connexion',
    component: ConnexionComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule { }
